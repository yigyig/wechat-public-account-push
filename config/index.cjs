/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe5d28b5d956b5faf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a1a83fb35734e29b1db93b0b3634fb94',

  PROVINCE: '重庆',
  CITY: '万州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小青蛙',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oaeis6fjdYs0Db8qOyvf_oyKg8IQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '6Z2lCQ2teh_1-wcwhTveUKkTrG8Y6Rz-SWX5z_y6BuQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '臭熊', year: '2002', date: '12-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小青蛙', year: '2002', date: '04-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '08-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-08-03' },
        // 结婚纪念日
        { keyword: 'false', date: 'false' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '2k2J_k0ARIND5u4ueEAyJafE1fn0EoPgEF8ebRxmGhc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '2k2J_k0ARIND5u4ueEAyJafE1fn0EoPgEF8ebRxmGhc',
    }
  ],

}

module.exports = USER_CONFIG

