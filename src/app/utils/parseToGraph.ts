import {extractBaseData} from './extractBaseData';
import {findAllNodes} from './findAllNodes';

export const parseToGraph = (data) => {
  const baseData = extractBaseData(data, ['TITLE', 'PLAYSUBT']);
  const actsNodes = findAllNodes(data, 'ACT');
  console.log(actsNodes);
};
