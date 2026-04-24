export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
  stack: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  category: "视频" | "文字" | "播客" | "平面";
  featured: boolean;
  image?: string;
  links: {
    label: string;
    url: string;
  }[];
  tags: string[];
  accent: string;
};

export const navigation = ["我", "工作经历", "作品集", "联系方式"];

export const experience: ExperienceItem[] = [
  {
    company: "国际劳工组织",
    role: "项目传播顾问",
    period: "2025.2-至今",
    location: "中国，北京（远程）",
    details: [
      "独立负责“优质学徒制培训与终身学习项目”的全案传播，通过图文与视频内容矩阵赋能超 100 家试点机构。",
      "深度参与 GreenPulse 倡议核心内容生产，统筹 3 本指南性文件审校，确保专业度与传播调性一致。",
    ],
    stack: ["图文设计", "视频剪辑"],
  },
  {
    company: "国际劳工组织",
    role: "传播与研究顾问",
    period: "2023.9-2023.12",
    location: "中国，北京",
    details: [
      "操盘微信公众号，围绕报告可视化与专家访谈等方向产出 20+ 篇推送，实现粉丝净增 2000+。",
      "从 0 到 1 搭建视频号内容矩阵，累计发布 15+ 条短视频，总播放量破 1 万，单条最高超 3000。",
      "承担 10+ 场国际研讨会与高层对话摄影，沉淀近万张可复用视觉素材。",
      "与劳动法专家协作输出政策简报，并深度参与劳动力市场研究内容。",
    ],
    stack: ["文案创作", "摄影", "视频拍摄"],
  },
  {
    company: "国际农业发展基金",
    role: "全球媒体实习生",
    period: "2025.5 - 2025.11",
    location: "意大利，罗马",
    details: ["数据驱动传播洞察：搭建并维护40，000+条媒体报道数据库，实时追踪150+社媒舆情，支撑Power BI仪表盘搭建及3份数字影响力报告产出，用数据反哺内容策略",
      "短视频内容操盘：全流程打造4条TikTok视频，独立负责脚本撰写、剪辑、字幕制作及基础数据分析，累计播放量1万+，有效呈现IFAD全球项目成果"




    ],
    stack: ["媒体监测", "数据分析", "短视频策划"],
  },
  {
    company: "国际农业发展基金",
    role: "创新实习生",
    period: "2024.9 - 2025.2",
    location: "意大利，罗马",
    details: ["从0到1打造创新年报：独立操盘2024 Innovation Newsletter的全案制作，整合团队成员关键数据，通过可视化设计将复杂信息转化为高阅读性内容，用于内部汇报与对外传播",
      "高管内容共创：联动联合国国际农业发展基金独立评估部门局长，联合撰写并发布博客文章，打造高层观点内容，提升团队行业声量"




    ],
    stack: ["媒体监测", "数据分析", "短视频策划"],
  },
  {
    company: "国际劳工组织",
    role: "项目传播实习生",
    period: "2023.2-2023.8",
    location: "中国，北京",
    details: [
      "微信公众号从0到1搭建：负责官方账号内容体系搭建，统筹文案、视觉、视频全链路，实现粉丝稳健增长1000+；微博账号增长突破：主导官方微博内容运营，通过持续内容输出与用户互动，实现粉丝增长2万，助力账号总粉丝量突破10万",
      "多元内容开拓：策划并落地播客系列内容，拓展机构传播形式；承担国际会议、地区办公室活动摄影工作，输出高质量视觉素材",
      "研究能力沉淀：参与劳动力市场研究项目，协助数据分析与政策简报撰写，展现从执行到输出的复合能力"
   
    ],
    stack: ["活动摄影", "账号搭建","内容策划","政策分析"
],
  },
  {
    company: "外交部",
    role: "公共外交实习生",
    period: "2022.8-2023.2",
    location: "中国，北京（混合办公）",
    details: [
      "运营新闻发言人社交媒体平台，负责素材搜集与海报制作，支撑日常内容发布",
      "支持外国记者公共外交活动，承担引导、翻译等现场协调工作",
      "制作外媒记者在华活动视频及电子相册，用于内部复盘与对外传播"
    ],
    stack: ["公共外交", "现场活动协调"],
  },

  {
    company: "字节跳动",
    role: "头条寻人寻亲项目实习生",
    period: "2021.5-2021.8",
    location: "中国，北京",
    details: [
      "深度采写退伍军人及烈士寻亲故事，沟通家属与事务部门，累计助力52人成功寻亲",
      "产出近30篇今日头条文章，多篇展现量破万，最高单篇阅读量超10万",

    ],
    stack: ["内容运营", "活动策划"],
  },

  {
    company: "界面新闻",
    role: "短视频创作实习生",
    period: "2020.4-2021.1",
    location: "中国，上海",
    details: [
      "监控国内外热点资讯，根据多平台调性制作并发布短视频近150条",
      "单条微博视频最高播放量超500万，多条内容引发站内外热议",

    ],
    stack: ["视频策划", "新媒体运营"],
  },
];

export const featuredExperience = experience.slice(0, 3);

export const projectCategories: ProjectItem["category"][] = ["视频", "文字", "播客", "平面"];

export const projects: ProjectItem[] = [
  {title: "(}) Labia Love {(})｜纪录片",
    summary: "{(}) Labia Love {(})借助学生艺术家Alexiya Kramarenko的经验和项目实践，将个人故事与社会议题相结合，不仅在女性群体中传播自我接纳和女性赋权理念，也推动公众对性教育和性别平等的讨论。",
    category: "视频",
    featured: true,
    image: "/IMG_5019.JPG",
    links: [
      { label: "Youtube", url: "https://www.youtube.com/watch?v=iqjpq75_x44" },
  
      
    ],
    tags: ["纪录片策划", "音频录制", "纪录片剪辑"],
    accent: "from-cyan-300 to-blue-400",
  },
  {
    title: "国际劳工组织与中国签署2023-2025年体面劳动国别计划",
    summary: "2023年7月12日，国际劳工组织与其在中国的三方伙伴签订新一轮的体面劳动国别计划（2023-2025年），这是自2006年以来的第四个中国体面劳动国别计划。体面劳动国别计划是国际劳工组织与中国三方成员的战略合作框架，并为双方共同推进社会正义和促进体面劳动指明方向。",
    category: "视频",
    featured: false,
    image: "/20230712-DSC07972.jpg",
    links: [
      { label: "国际劳工组织官网", url: "https://www.ilo.org/zh-hans/resource/news/国际劳工组织与中国签署2023-2025年体面劳动国别计划#:~:text=北京（国际劳工组织新闻）——2023年7月12日，国际劳工组织与其在中国的三方伙伴签订新一轮的体面劳动国别计划（2023-2025年），这是自2006年以来的第四个中国体面劳动国别计划%E3%80%82,体面劳动国别计划是国际劳工组织与中国三方成员的战略合作框架，并为双方共同推进社会正义和促进体面劳动指明方向%E3%80%82" },
      { label: "微信公众号", url: "https://mp.weixin.qq.com/s/9-sjfDmwb2kuSloKLFeT7g" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=5rtpn6DPSj0" },
    ],
    tags: ["短视频策划", "活动拍摄", "内容策划"],
    accent: "from-cyan-300 to-blue-400",
  },
  {
    title: "IFAD项目惠及蒙古牧民 提升畜牧生产力",
    summary: "蒙古的牧民正面临极端温度带来的严峻挑战，无论是酷暑还是严寒，都影响着畜牧生产和生计。借助国际农业发展基金（IFAD）资助的项目支持，当地已经建设了230口水井，为约200万头牲畜提供可靠饮水保障。同时，牧场面积增加了最高5%，牲畜生产力也提升了约10%。该项目不仅改善了牧民的生计条件，也增强了草原生态的可持续利用，为蒙古传统畜牧业在应对气候波动和提升生产效率方面提供了可行的解决方案。",
    category: "视频",
    featured: false,
    image: "/IFAD-MONGOLIA.png",
    links: [
      { label: "TikTok", url: "https://www.tiktok.com/@ifad/video/7530284583670074646?is_from_webapp=1&sender_device=pc" },
      ],
    tags: ["短视频策划", "内容策划"],
    accent: "from-cyan-300 to-blue-400",
  },
  {
    title: "实习作品：界面新闻评出2020年度风光财经人物",
    summary: "界面新闻连续第三年对财经领域的人物和公司进行年度盘点。2020充满挑战，也充满希望。这一年里，众多企业成功上市，众多企业实现突破，它们身后的企业家们坚持创新，奋斗不辍，成为这一年叱咤财经领域的风光人物。（图片：视觉中国）",
    category: "视频",
    featured: false,
    image: "/jm news.png",
    links: [
      { label: "界面新闻", url: "https://www.jiemian.com/video/AGQCOAhlB2QBPlVj.html" },
      ],
    tags: ["短视频策划", "视频剪辑", "内容策划"],
    accent: "from-cyan-300 to-blue-400",
  },
  {
    title: "Younger children get care, parents get relief",
    summary: "杭州拱墅区和睦社区开设了阳光儿童托育中心，为3岁以下儿童提供普惠、低价、就近的托育服务。这一举措填补了当地早教空白，也让年轻父母在全职工作与育儿之间获得实际缓解。中心将孩子的社交能力、情绪管理和自我管理作为重点，通过同伴互动和多样化亲子活动支持幼儿成长，同时向家长提供育儿讲座和教育指导。随着三孩政策的全面实施，全国各地托育服务需求不断增加，类似机构的建立不仅有助于减轻家庭育儿压力，也在一定程度上提升了居民的生育意愿。这一新闻反映出托育服务的普及正在成为年轻家庭的重要生活支撑，也体现了地方政府和社区在完善公共育儿资源方面的努力。",
    category: "文字",
    featured: true,
    image:"/cdnews.jpeg",
    links: [{ label: "China Daily 新闻链接", url: "https://www.chinadaily.com.cn/a/202208/23/WS63049927a310fd2b29e73d22_1.html" }],
    tags: ["采访写作", "社会实践"],
    accent: "from-sky-300 to-indigo-400",
  },
  {
    title: "Evaluation for excellence: Understanding IOE’s work through the lens of innovation",
    summary: "联合国国际农业发展基金（IFAD）独立评估办公室（IOE）在发展项目评估领域的创新实践被认为是全球典范。IOE通过将神经科学与评估方法结合，优化沟通方式，将复杂评估结果转化为可供决策者和现场从业者参考的生动故事，同时推动合作与学习而非单纯审查。办公室还引入人工智能和预测分析技术，提高数据处理效率，强化战略决策支持。此外，IOE积极参与国际评估网络和知识交流，通过研讨会、培训和治理机构互动，提升IFAD项目的透明度与成效。随着评估方法的持续创新和参与性增强，IOE在引导政策、优化发展实践和推动全球发展评估创新中，扮演着不可或缺的角色。",
    category: "文字",
    featured: true,
    image:"/IFAD-BLOG.png",
    links: [{ label: "UNSSC", url: "https://www.unssc.org/news-and-insights/blog/evaluation-excellence-understanding-ioes-work-through-lens-innovation" },
      { label: "IFAD IOE", url: "https://ioe.ifad.org/en/w/evaluation-for-excellence-understanding-ioe-s-work-through-the-lens-of-innovation" },
    ],
    tags: ["采访写作", "高管共创"],
    accent: "from-sky-300 to-indigo-400",
  },
  {
    title: "青年就业：机遇与挑战（上）",
    summary: "“中国劳动世界的未来”系列播客由国际劳工组织北京局制作并播出。在播客中，劳动法专家将与嘉宾一起讨论劳动世界的热点话题，分享中国学者和国际劳工组织的最新研究。上期内容讨论了青年就业脆弱性背后的原因，新兴职业的优势和挑战以及数字技术对青年人就业的影响，下期内容讨论了哪里可能是青年就业的蓝海，并从教育体系、就业环境、就业数量、质量和结构方面，为缓解青年就业难提出一些建议，帮助青年人顺利地走向职场，实现从学校向劳动力市场的过渡。",
    category: "播客",
    featured: true,
    image:"/第一期播客-公众号首图.png",
    links: [
      { label: "国际劳工组织官网", url: "https://soundcloud.com/international-labour-organization/qcetilyiq4fw" },
      { label: "微信公众号", url: "https://mp.weixin.qq.com/s/DfpdD3WwmTCLsWkdR5v-AQ" },
],tags:["播客策划制作", "内容策划"],
    accent: "from-fuchsia-300 to-rose-400",
  },
   
  {
    title: "青年就业：机遇与挑战（下）",
    summary: "本期播客，我们将讨论哪里可能是青年就业的蓝海，并从教育体系、就业环境、就业数量、质量和结构方面，为缓解青年就业难提出一些建议，帮助青年人顺利地走向职场，实现从学校向劳动力市场的过渡。",
    category: "播客",
    featured: true,
    image:"/淡黄色首图.png",
    links: [
      { label: "微信公众号", url: "https://mp.weixin.qq.com/s/eZ4skWwzhv2hBi3j6tbhdA" },
],tags:["播客策划制作", "内容策划"],
    accent: "from-fuchsia-300 to-rose-400",
  },
  {
    title: "《通用绿色技能指南》宣传海报｜“优质学徒制培训与终身学习”项目",
    summary: "宣传海报将《通用绿色技能指南》的核心内容以直观、生动的方式呈现，向全球受众展示这套具有开拓性的绿色技能培训工具。该指南紧密贴合中国绿色转型背景下的通用技能需求，旨在提升现有和未来劳动者的绿色素养，培养绿色思维，并将其有效运用于生产与日常生活中。",
    category: "平面",
    featured: true,
    image:"/平面设计1.png",
    links: [
      { label: "宣传海报（中文）", url: "https://www.ilo.org/sites/default/files/2025-09/20250619_【中文版info】通用绿色技能指南.pdf" },
      { label: "宣传海报（英文）", url: "https://www.ilo.org/sites/default/files/2025-10/20250619_【英文版info】通用绿色技能指南.pdf" },
    ],
    tags: ["海报设计", "信息图", "品牌一致性"],
    accent: "from-amber-300 to-orange-400",
  },
  
];
