import Mock from 'mockjs'
import data from './data.json'

//商品列表的接口
Mock.mock('/goods',{code:0, data: data.goods})
//返回Ratings的接口
Mock.mock('/ratings',{code:0, data: data.ratings})
//返回info的接口
Mock.mock('/info',{code:0, data: data.info})

//