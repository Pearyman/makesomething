const bt = {
  val: 1,
  left:{
    val: 2,
    left:{
      val:3,
      left: null,
      right: null
    },
    right:{
      val: 4,
      right: null,
      left: {
        val: 5,
        left: null,
        right: null
      }
    }
  },
  right:{
    val: 6,
    left: null,
    right:{
      val: 7,
      left: null,
      right:null
    }
  }
}

module.exports = bt
