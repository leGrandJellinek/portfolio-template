import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [
      {
        id:1,
        title: "Home",
        path: "/"
      },
      {
        id:2,
        title: "About me",
        path: "/about"
      },
      {
        id:3,
        title: "Skills",
        path: "/skills"
      },
      {
        id:4,
        title: "Portfolio",
        path: "/portfolio"
      },
      {
        id:5,
        title: "Contacts",
        path: "/"
      }
    ],
    skills: [
      {
        id:1,
        title:"Adobe Photoshop",
        stars: 4,
        img: "Photoshop.png"
      },
      {
        id:2,
        title: "Adobe Illustrator",
        stars: 3,
        img: "illustrator.png"
      },
      {
        id:3,
        title: "Adobe After Effects",
        stars: 4,
        img: "Effects.png"
      },
      {
        id:4,
        title: "Figma",
        stars: 4,
        img: "Figma.png",
        wImg: true
      },
    ],
    portfolioWorks: [{
      id:1,
      image: "fashion_store.png",
      title: "Online fashion store - Homepage"
    },
    {
      id:2,
      image: "reebok_store.png",
      title: "Reebok Store - Concept"
    },
    {
      id:3,
      image: "braun_page.png",
      title: "Braun Landing Page - Concept"
    }]
  },
  getters: {
    getMenuList(state){
      return state.menuList
    },
    getSkillsList(state){
      return state.skills
    },
    getPortfolioWorks(state){
      return state.portfolioWorks
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
