import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const currentLang = ref("en-US"); // 默认英文

  // 切换语言方法
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === "en-US" ? "zh-CN" : "en-US";
  };

  return {
    currentLang,
    toggleLanguage,
  };
});
