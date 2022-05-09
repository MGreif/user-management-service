import { Messanger } from '../config/Messanger'
import { getUser } from '../services/user.service'

export const useUserQuery = () => {
  const queueName = 'user-management-service_get-user'
  Messanger.channel.assertQueue(queueName)
  Messanger.channel.consume(queueName, async (msg) => {
    const username = msg.content.toString()
    const user = await getUser({ username })
    Messanger.channel.ack(msg)
    Messanger.channel.sendToQueue(
      msg.properties.replyTo,
      Buffer.from(JSON.stringify(user)),
      {
        correlationId: msg.properties.correlationId,
      }
    )
  })
}
