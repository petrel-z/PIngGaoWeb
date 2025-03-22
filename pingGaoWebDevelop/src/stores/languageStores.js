import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const currentLang = ref(localStorage.getItem("language") || "zh-CN"); // 默认中文

  // 切换语言方法
  const toggleLanguage = (language) => {
    currentLang.value = language;
    localStorage.setItem("language", language);
  };

  return {
    currentLang,
    toggleLanguage,
  };
});
