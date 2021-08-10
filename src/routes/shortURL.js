import controller from '../controllers'

export default [
  {
    method: 'get',
    path: 'get/:id',
    beforeAction: [],
    controller: controller.shortURL.getShortURL,
  },
  {
    method: 'post',
    path: 'shortURL',
    beforeAction: [],
    controller: controller.shortURL.createShortURL,
  },
]
