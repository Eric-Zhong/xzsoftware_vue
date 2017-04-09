import jQuery from 'jquery'
import 'cropper'

export default {
  update: function (el, binding, vnode, oldVnode) {
    console.log('【Snippet update】 ' + (new Date()))
    jQuery(el).cropper("destroy")
    jQuery(el).cropper(binding.value)
  }
}
