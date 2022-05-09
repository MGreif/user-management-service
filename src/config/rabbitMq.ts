import { logger } from './logger'
import { Messanger } from './Messanger'
;(async () => {
  await Messanger.initiateConnection()
  await Messanger.createChannel()

  Messanger.channel.assertQueue('test-queue')
  Messanger.channel.consume('test-queue', (msg) => {
    console.log('message received', msg.content.toString())

    setTimeout(() => {
      Messanger.channel.sendToQueue(
        msg.properties.replyTo,
        Buffer.from('Sent from user-management-service'),
        {
          correlationId: msg.properties.correlationId,
        }
      )
      console.log('message sent to ', msg.properties.replyTo)
    }, 1000)
  })
})()
