export default [
  {
    key: 'common',
    children: [
      {
        key: 'follow', // added
        value1: undefined,
        value2: false,
      },
      {
        key: 'setting1', // not changed
        value: 'Value 1',
      },
      {
        key: 'setting2', // removed
        value1: 200,
        value2: undefined,
      },
      {
        key: 'setting3', // changed
        value1: true,
        value2: null,
      },
      {
        key: 'setting4', // added
        value1: undefined,
        value2: 'blah blah',
      },
      {
        key: 'setting5', // added
        value1: undefined,
        value2: {
          key5: 'value5',
        },
      },
      {
        key: 'setting6', // changed
        children: [
          {
            key: 'doge',
            children: [
              {
                key: 'wow', // changed
                value1: '',
                value2: 'so much',
              },
            ],
          },
          {
            key: 'key', // not changed
            value: 'value',
          },

          {
            key: 'ops', // added
            value1: undefined,
            value2: 'vops',
          },
        ],
      },
    ],
  },
  {
    key: 'group1', // changed
    children: [
      {
        key: 'baz',
        value1: 'bas',
        value2: 'bars',
      },
      {
        key: 'foo', // not changed
        value: 'bar',
      },
      {
        key: 'nest', // changed
        value1: {
          key: 'value',
        },
        value2: 'str',
      },
    ],
  },

  {
    key: 'group2', // removed
    value1: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    value2: undefined,
  },

  {
    key: 'group3',
    value1: undefined,
    value2: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
  },
];
