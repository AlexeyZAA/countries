import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Countrycard from '@/components/Countrycard.vue'

describe('Блок тестов Countrycard.vue', () => {
  it('Снимок краты страны', () => {
    const flag = 'http://testdomain'
    const name = 'Текст имя'
    const  capital = 'Текст столица'
    const  region = 'Текст регион'
    const  population = 'Текст население'
    const renderer = createRenderer()
    const hide = false

    const wrapper = shallowMount(Countrycard, {
    propsData: {
        flag, name, capital, region, population, hide 
      }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})