// eslint-disable-next-line import/no-extraneous-dependencies
import { request } from "strapi-helper-plugin";

// request
/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

// Если url начать с / - то в начало добавиться адрес backend
// url = _.startsWith(url, '/') ? `${strapi.backendURL}${url}` : url;
// В options можно передать {params : {a:1,b:2}, body: {ss :2, bpaem:3}, method: "GET" }

//* ********************
// import { request, LoadingIndicator, useGlobalContext } from 'strapi-helper-plugin';
//   <LoadingIndicator small />
// *********************

// eslint-disable-next-line import/prefer-default-export
export const fetchTreeData = async () => {
  strapi.notification.toggle({
    type: "warning ",
    message: "Начинаяю запрос данных",
    title: "title",
    uid: "25uid",
  });

  try {
    const results = await request("/simple-tree-data/1", {
      method: "GET",
    });
    return results;
  } catch (err) {
    console.error({ err });
    strapi.notification.error("fetchTreeData error");
    return null;
  }
};
