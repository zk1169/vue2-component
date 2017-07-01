let langCn = {
    global: {
        btn: {
            create: '创建',
            update: '更新',
            cancel: '取消',
            submit: '提交',
            save: '保存',
            confirm: '确认',
            preview: '预览结果',
            add: '添加',
            edit: '编辑',
            delete: '删除',
            addComment: '添加注释',
            yes: '是',
            no: '否'
        }
    },
    dbSelector: {
        title: '搜索范围设定',
        all: '全部数据库',
        docdb: '全球范围内103个国家/组织专利英文摘要数据库 <a href="/countrylist">查看国家</a>'
    },
    header: {
        searchHelper: '搜索帮助',
        searchType: '搜索类型',
        searchTypes: {
            simpleSearch: '简单搜索',
            fieldSearch: '字段搜索',
            cmdSearch: '命令搜索',
            bulkSearch: '批量处理',
            semanticSearch: '语义搜索',
            divergent: '扩展搜索',
            classification: '分类号搜索',
            legalSearch: '法律搜索',
            imageSearch: '图像搜索',
            chemicalSearch: '化学搜索'
        },
        icons: {
            history: '历史记录',
            workspace: '工作空间',
            emailAlert: '邮件提醒',
            saveQuery: '已保存语句',
            myAnalysis: '我的分析',
            landscape: '我的专利地图',
            assignee: '申请人分组',
            hour: '导出记录',
            helperCenter: '帮助中心',
            releaseLog: '更新日志',
            feature: '特色功能',
            account: '用户设置',
            course: '智慧芽学院'
        },
        headerInputOver: {
            'search-tips': '常用命令和语法',
            clear: '清空',
            'search-helper': '搜索帮助',
            ANC: '当前申请(专利权)人',
            TAC: '标题/摘要/权利要求',
            ABST: '摘要',
            IPC: '国际专利分类号',
            ANCS: '[标]当前申请(专利权)人',
            TA: '标题/摘要',
            CLMS: '权利要求',
            CPC: '联合专利分类号',
            AND: '与',
            brackets: '优先运算',
            asterisk: '替代0或多个字符',
            Wn: '间隔n个单词',
            OR: '或',
            bigBrackets: '日期范围',
            question: '替代一个字符',
            PREn: '间隔n个单词且先后顺序固定',
            NOT: '非',
            quota: '具体短语',
            WS: '限定在一句话内',
        }
    },
    lib: {
        name: '智慧芽前端组件库'
    },
    mt: {
        cn: '搜索包含英文机器翻译',
        en: '搜索包含中文机器翻译'
    },
    feedback: {
        title: '你喜欢这个新版本吗?',
        like: '喜欢',
        dislike: '不喜欢',
        general: '一般般'
    },
    error: {
        searchNoResults: '找不到您的查询LANG相符的專利。相符的专利。 请扩大您的搜索范围或者检查一下您的搜索命令是否正确',
        reason: '没有搜索到相关专利，原因可能是:',
        notExist: '专利不存在。',
        beSecret: '该发明创造目前未公开／未公告，处于保密专利申请的状态。',
        beSecretTips: '(这段时间一般是自申请日起几个月到十几个月，过段时间再来查吧。)',
        incorrect: '检索条件不正确。',
        incorrectTips: '(请您核对是否对搜索条件进行了不正确的字段限定。)',
        ambiguous: '搜索关键词范围太窄。',
        ambiguousTips: '(请尝试使用其他关键词或近义词、使用含义更为宽泛的关键词。)',
        ipcDuplicated: '(已经添加过此分类号。)'
    }
};

let langEn = {
    global: {
        btn: {
            create: 'Create',
            update: 'Update',
            cancel: 'Cancel',
            submit: 'Submit',
            save: 'Save',
            confirm: 'Confirm',
            preview: 'Preview',
            add: 'Add',
            edit: 'Edit',
            delete: 'Delete',
            addComment: 'Add Comment',
            yes: 'Yes',
            no: 'No',
        },
    },
    dbSelector: {
        title: 'Select Databases',
        all: 'All databases',
        docdb: 'Worldwide - collection of published applications from 103 countries  <a href="/countrylist">Country list</a>',
    },
    header: {
        searchHelper: 'Search Helper',
        searchType: 'Search Type',
        searchTypes: {
            simpleSearch: 'Simple',
            fieldSearch: 'Field',
            cmdSearch: 'Command',
            bulkSearch: 'Bulk',
            semanticSearch: 'Semantic',
            divergent: 'Expand',
            classification: 'Classification',
            legalSearch: 'Legal',
            imageSearch: 'Image',
            chemicalSearch: 'Chemical'
        },
        icons: {
            history: 'History',
            workspace: 'Workspace',
            emailAlert: 'Email Alert',
            saveQuery: 'Saved Search',
            myAnalysis: 'My Analysis',
            landscape: 'Landscape',
            assignee: 'Name Grouping',
            hour: 'Export history',
            helperCenter: 'Helper Center',
            releaseLog: 'Release Log',
            feature: 'Features',
            account: 'Account',
            course: 'Patsnap Course'
        },
        headerInputOver: {
            'search-tips': 'Search tips',
            clear: 'Clear',
            'search-helper': 'Search Helper',
            ANC: 'Current Assignee',
            TAC: 'Title/Abstract/Claims',
            ABST: 'Abstract',
            IPC: 'IPC',
            ANCS: 'Standardized Current Assignee',
            TA: 'Title/Abstract',
            CLMS: 'Claims',
            CPC: 'CPC',
            AND: 'Inclusion',
            brackets: 'Parentheses executed first',
            asterisk: 'Multi-character wildcard',
            Wn: 'Within N words',
            OR: 'Alternative',
            bigBrackets: 'Square brackets for date range queries',
            question: 'Single-character wildcard',
            PREn: ' Within N words, in order specified',
            NOT: 'Exclusion',
            quota: 'Exact phrase',
            WS: 'Within same sentence',
        }
    },
    lib: {
        name: 'ui library of patsnap'
    },
    mt: {
        cn: 'Search including Chinese machine translations',
        en: 'Search including English machine translations'
    },
    feedback: {
        title: 'Do you like this new version?',
        like: 'Like',
        dislike: 'Dislike',
        general: 'General'
    },
    error: {
        searchNoResults: 'We are sorry, we cannot find patents related to LANG.Please broaden your search, or check that your search command is correct.',
        reason: 'Possible reasons why we cannot find patents related to your search:',
        notExist: 'The patent does not exist.',
        beSecret: 'The invention has not yet been published and is kept confidential to the patent office.',
        beSecretTips: '(Patents are typically published a few months (up to 18) after their application date.)',
        incorrect: 'The search criteria provided is incorrect.',
        incorrectTips: '(Please make sure that your keywords have been entered into the correct fields.)',
        ambiguous: 'The keywords entered produce a narrow range of results.',
        ambiguousTips: '(Please try using synonyms of your original keywords. You may retrieve more results.)',
        ipcDuplicated: '(This classification number has already been added.)'
    }
};
let langTw = {
    global: {
        btn: {
            create: '創建',
            update: '更新',
            cancel: '取消',
            submit: '提交',
            save: '保存',
            confirm: '確認',
            preview: '預覽結果',
            add: '添加',
            edit: '編輯',
            delete: '刪除',
            addComment: '添加註釋',
            yes: '是',
            no: '否'
        }
    },
    dbSelector: {
        title: '搜索範圍設定',
        all: '全部數據庫',
        docdb: '全球範圍內103個國家/組織專利英文摘要數據庫 <a href="/countrylist">查看國家</a>'
    },
    header: {
        searchHelper: '搜索幫助',
        searchType: '搜索類型',
        searchTypes: {
            simpleSearch: '簡單搜索',
            fieldSearch: '字段搜索',
            cmdSearch: '命令搜索',
            bulkSearch: '批量處理',
            semanticSearch: '語義搜索',
            divergent: '擴展搜索',
            classification: '分類號搜索',
            legalSearch: '法律搜索',
            imageSearch: '圖像搜索',
            chemicalSearch: '化學搜索'
        },
        icons: {
            history: '歷史記錄',
            workspace: '工作空間',
            emailAlert: '郵件提醒',
            saveQuery: '已保存語句',
            myAnalysis: '我的分析',
            landscape: '我的專利地圖',
            assignee: '申請人分組',
            hour: '導出記錄',
            helperCenter: '幫助中心',
            releaseLog: '更新日誌',
            feature: '特色功能',
            account: '用戶設置',
            course: '智慧芽學院'
        },
        headerInputOver: {
            'search-tips': '常用命令和語法',
            clear: '清空',
            'search-helper': '搜索幫助',
            ANC: '當前申請（專利權）人',
            TAC: '標題/摘要/權利要求',
            ABST: '摘要',
            IPC: '國際專利分類號',
            ANCS: '[標]當前申請（專利權）人',
            TA: '標題/摘要',
            CLMS: '權利要求',
            CPC: '聯合專利分類號',
            AND: '與',
            brackets: '優先運算',
            asterisk: '替代0或多個字符',
            Wn: '間隔n個單詞',
            OR: '或',
            bigBrackets: '日期範圍',
            question: '替代一個字符',
            PREn: '間隔n個單詞且先後順序固定',
            NOT: '非',
            quota: '具體短語',
            WS: '限定在一句話內',
        }
    },
    lib: {
        name: '智慧芽前端組件庫'
    },
    mt: {
        cn: '搜索包含英文機器翻譯',
        en: '搜索包含中文機器翻譯'
    },
    feedback: {
        title: '妳喜歡這個新版本嗎?',
        like: '喜歡',
        dislike: '不喜歡',
        general: '壹般般'
    },
    error: {
        searchNoResults: '找不到您的查詢LANG相符的專利。相符的專利。 請擴大您的搜索範圍或者檢查壹下您的搜索命令是否正確',
        reason: '沒有搜索到相關專利，原因可能是:',
        notExist: '專利不存在。',
        beSecret: '該發明創造目前未公開／未公告，處於保密專利申請的狀態。',
        beSecretTips: '(這段時間壹般是自申請日起幾個月到十幾個月，過段時間再來查吧。)',
        incorrect: '檢索條件不正確。',
        incorrectTips: '(請您核對是否對搜索條件進行了不正確的字段限定。)',
        ambiguous: '搜索關鍵詞範圍太窄。',
        ambiguousTips: '(請嘗試使用其他關鍵詞或近義詞、使用含義更為寬泛的關鍵詞。)',
        ipcDuplicated: '(已經添加過此分類號。)'
    }
};

export { langCn, langEn, langTw };