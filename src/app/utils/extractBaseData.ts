import {findNode} from './findNode';

export const extractBaseData = (data: any, tags: string[]): { [key: string]: any } => {

  // const search = (obj, propVal) => {
  //
  //   let result = null;
  //
  //   if (obj.name === propVal) {
  //     return {[propVal]: obj.elements[0].text};
  //   } else if (obj.elements) {
  //     obj.elements.find(el => {
  //       result = search(el, propVal);
  //       return !!result;
  //     });
  //
  //     return result;
  //   }
  //   return null;
  // };

  return tags.reduce((searchResults, tag: string) => {
    return {...searchResults, ...findNode(data, tag)};
  }, {});
};
