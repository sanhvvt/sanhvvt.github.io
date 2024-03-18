export const sidebar_zh = {
    '/test/': [
        { text: '测试一', link: "/test/1" },
        { text: '测试二', link: "/test/2" },
        {
            text: '测试集合', collapsed: false, items: [
                { text: 'abc', link: "/test/group/abc" },
                { text: 'def', link: "/test/group/def" },
            ]
        },
    ],
};