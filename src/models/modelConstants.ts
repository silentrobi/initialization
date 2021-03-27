const modelConstants = {
  jsonTags: {
    JSON_TAG_SELECT: 'select',
    JSON_TAG_COUNT: 'sql_count',
    JSON_TAG_FILTER: 'filter',
    JSON_TAG_SORT: 'sort',
    JSON_TAG_LIMIT: 'limit',
    JSON_TAG_OFFSET: 'offset',
    JSON_TAG_OBJECT: 'object',
    JSON_TAG_NEWVALUES: 'newvalues',
    JSON_TAG_ROWCOUNT: 'rowCount',
    JSON_TAG_ROWS: 'rows',
  },

  defaultValues: {
    limit: 20,
    offset: 0,
  }
};

export { modelConstants };
