import { useUserQuery } from '../queries/user.queries'
import { logger } from './logger'
import { Messanger } from './Messanger'
;(async () => {
  await Messanger.initiateConnection()
  await Messanger.createChannel()

  useUserQuery()
})()
