import jQuery from 'jquery'
import 'cropper'

export default {
  deep: true,
  bind(el, binding, vnode, oldVnode) {
    console.log("Cropper bind.")
  },
  inserted(el, binding, vnode, oldVnode) {
    console.log("Cropper inserted.")
    const options = binding.value
    jQuery(el).cropper(options)
  },
  update: function(el, binding, vnode, oldVnode) {
    console.log("Cropper update.")
    console.log(el)
    jQuery(el).cropper('destroy')
    // 2. Recreate the component
    setTimeout(() => {
      jQuery(el).cropper(binding.value)
    }, 0)
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    console.log("Cropper component updated.")
  },
  unbind(el, binding, vnode, oldVnode) {
    if (this) {
      // Destroy component
      jQuery(this.el).cropper('destroy')
    }
  }
}
