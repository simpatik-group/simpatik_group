import { useState } from 'react';

import { staticValues } from '@/helpers/staticValues';

export function usePagination<T>(initialArticlesList: T) {
  const [paginationState, setPaginationState] = useState(
    staticValues.PAGINATION_VALUE,
  );
  const [articlesList, setArticlesList] = useState<T>(initialArticlesList);

  return { articlesList, paginationState, setArticlesList, setPaginationState };
}
