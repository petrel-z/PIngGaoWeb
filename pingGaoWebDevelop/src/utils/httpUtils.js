/**
 * HttpUtils 封装了 HTTP 请求方法
 *
 * 使用示例：
 *
 * 1. GET 请求：
 * ```
 * HttpUtils.get('/cms/news/getnews?newsId=1')
 *   .then(response => response.json())
 *   .then(result => console.log(result))
 *   .catch(error => console.error("GET 请求失败", error));
 * ```
 *
 * 2. POST 请求（默认 JSON 格式）：
 * ```
 * HttpUtils.post('/api/example', { name: "test" })
 *   .then(response => response.json())
 *   .then(result => console.log(result))
 *   .catch(error => console.error("POST 请求失败", error));
 * ```
 *
 * 3. POST 请求（使用 `FormData` 格式）：
 * ```
 * const formData = new FormData();
 * formData.append('name', 'test');
 * HttpUtils.post('/api/example', formData)
 *   .then(response => response.json())
 *   .then(result => console.log(result))
 *   .catch(error => console.error("POST FormData 请求失败", error));
 * ```
 *
 * 4. POST 请求（使用 `x-www-form-urlencoded` 格式）：
 * ```
 * HttpUtils.post('/api/example', { name: "test" }, {
 *   headers: { "Content-Type": "application/x-www-form-urlencoded" }
 * })
 *   .then(response => response.json())
 *   .then(result => console.log(result))
 *   .catch(error => console.error("POST urlencoded 请求失败", error));
 * ```
 *
 * 5. PUT 请求：
 * ```
 * HttpUtils.put('/api/example/1', { name: "updatedName" })
 *   .then(response => response.json())
 *   .then(result => console.log(result))
 *   .catch(error => console.error("PUT 请求失败", error));
 * ```
 *
 * 6. DELETE 请求：
 * ```
 * HttpUtils.delete('/api/example/1')
 *   .then(response => response.json())
 *   .then(result => console.log(result))
 *   .catch(error => console.error("DELETE 请求失败", error));
 * ```
 */
const HttpUtils = {
  // baseUrl: 服务器地址
  baseUrl: '/api',

  /**
   * 发送 GET 请求
   *
   * @param {string} endpoint 请求路径（将自动拼接 baseUrl）
   * @param {object} [customOptions] 自定义 fetch 配置，如额外 headers、mode 等
   * @returns {Promise<Response>} fetch 返回的响应对象
   */
  async get(endpoint, customOptions = {}) {
    const options = {
      method: 'GET',
      headers: {
        'Tenant-Id': '1',
        ...(customOptions.headers || {}),
      },
      ...customOptions,
    }
    return fetch(this.baseUrl + endpoint, options)
  },

  /**
   * 发送 POST 请求
   *
   * 支持 application/json、FormData 和 application/x-www-form-urlencoded 请求体格式
   *
   * @param {string} endpoint 请求路径（将自动拼接 baseUrl）
   * @param {any} body 请求体数据
   * @param {object} [customOptions] 自定义 fetch 配置，如额外 headers、mode 等
   * @returns {Promise<Response>} fetch 返回的响应对象
   */
  async post(endpoint, body, customOptions = {}) {
    const { headers: customHeaders = {}, ...restOptions } = customOptions
    // 默认 Content-Type 为 application/json
    const contentType = customHeaders['Content-Type'] || 'application/json'
    const headers = {
      'Tenant-Id': '1',
      ...customHeaders,
      'Content-Type': contentType,
    }
    let transformedBody

    if (body instanceof FormData) {
      // 如果传入 FormData，则让浏览器自动设置 Content-Type
      delete headers['Content-Type']
      transformedBody = body
    } else if (contentType === 'application/x-www-form-urlencoded') {
      // urlencoded 格式，将 body 转为 URLSearchParams 字符串
      transformedBody = new URLSearchParams(body).toString()
    } else if (contentType === 'application/json') {
      // json 格式，将 body 转为 JSON 字符串
      transformedBody = JSON.stringify(body)
    } else {
      transformedBody = body
    }

    const options = {
      method: 'POST',
      headers,
      body: transformedBody,
      ...restOptions,
    }
    return fetch(this.baseUrl + endpoint, options)
  },

  /**
   * 发送 PUT 请求
   *
   * 支持 application/json、FormData 和 application/x-www-form-urlencoded 请求体格式
   *
   * @param {string} endpoint 请求路径（将自动拼接 baseUrl）
   * @param {any} body 请求体数据
   * @param {object} [customOptions] 自定义 fetch 配置，如额外 headers、mode 等
   * @returns {Promise<Response>} fetch 返回的响应对象
   */
  async put(endpoint, body, customOptions = {}) {
    const { headers: customHeaders = {}, ...restOptions } = customOptions
    const contentType = customHeaders['Content-Type'] || 'application/json'
    const headers = {
      'Tenant-Id': '1',
      ...customHeaders,
      'Content-Type': contentType,
    }
    let transformedBody

    if (body instanceof FormData) {
      delete headers['Content-Type']
      transformedBody = body
    } else if (contentType === 'application/x-www-form-urlencoded') {
      transformedBody = new URLSearchParams(body).toString()
    } else if (contentType === 'application/json') {
      transformedBody = JSON.stringify(body)
    } else {
      transformedBody = body
    }

    const options = {
      method: 'PUT',
      headers,
      body: transformedBody,
      ...restOptions,
    }
    return fetch(this.baseUrl + endpoint, options)
  },

  /**
   * 发送 DELETE 请求
   *
   * @param {string} endpoint 请求路径（将自动拼接 baseUrl）
   * @param {object} [customOptions] 自定义 fetch 配置，如额外 headers、mode 等
   * @returns {Promise<Response>} fetch 返回的响应对象
   */
  async delete(endpoint, customOptions = {}) {
    const options = {
      method: 'DELETE',
      headers: {
        'Tenant-Id': '1',
        ...(customOptions.headers || {}),
      },
      ...customOptions,
    }
    return fetch(this.baseUrl + endpoint, options)
  },
}

export default HttpUtils
