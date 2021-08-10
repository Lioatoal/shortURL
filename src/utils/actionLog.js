// import moment from 'moment'
// import actionLog from '../models/actionLog'

// export const loginAction = async (ctx) => {
//   const { username, nickname, isAgent } = ctx.session.userData

//   if (isAgent) {
//     await actionLog.create({
//       userId: username,
//       content: `${nickname} is login`,
//       actionType: 'login',
//       logTime: moment(),
//     })
//   }
// }

// export const createAction = async (apiName, ctx) => {
//   const { username } = ctx.session.userData

//   await actionLog.create({
//     userId: username,
//     content: apiName,
//     actionType: 'create',
//     logTime: moment(),
//   })
// }
