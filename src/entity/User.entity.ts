import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type CountryCallingCodeType =
  | 1
  | 7
  | 20
  | 27
  | 30
  | 31
  | 32
  | 33
  | 34
  | 36
  | 39
  | 40
  | 41
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 81
  | 82
  | 84
  | 86
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 98
  | 212
  | 213
  | 216
  | 218
  | 220
  | 221
  | 223
  | 224
  | 225
  | 226
  | 227
  | 228
  | 229
  | 230
  | 231
  | 232
  | 233
  | 234
  | 235
  | 236
  | 237
  | 239
  | 241
  | 242
  | 243
  | 244
  | 247
  | 248
  | 249
  | 251
  | 252
  | 253
  | 254
  | 255
  | 256
  | 257
  | 258
  | 260
  | 261
  | 262
  | 263
  | 264
  | 265
  | 266
  | 267
  | 268
  | 327
  | 331
  | 350
  | 351
  | 352
  | 353
  | 354
  | 355
  | 356
  | 357
  | 358
  | 359
  | 370
  | 371
  | 372
  | 373
  | 374
  | 375
  | 376
  | 377
  | 378
  | 380
  | 381
  | 386
  | 420
  | 421
  | 423
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 509
  | 591
  | 592
  | 593
  | 594
  | 595
  | 596
  | 597
  | 598
  | 599
  | 673
  | 674
  | 675
  | 676
  | 677
  | 679
  | 682
  | 684
  | 685
  | 689
  | 850
  | 852
  | 853
  | 855
  | 856
  | 880
  | 886
  | 960
  | 961
  | 962
  | 963
  | 964
  | 965
  | 966
  | 967
  | 968
  | 971
  | 972
  | 973
  | 974
  | 976
  | 977
  | 992
  | 993
  | 994
  | 995
  | 1242
  | 1246
  | 1264
  | 1268
  | 1345
  | 1441
  | 1664
  | 1670
  | 1671
  | 1758
  | 1784
  | 1787
  | 1809
  | 1876
  | 1890
  | null;

export const CountryCallingMap: Map<
  CountryCallingCodeType,
  {
    countriesAndRegions: string;
    zh: string;
    code: CountryCallingCodeType;
  }
> = new Map([
  [1, { countriesAndRegions: 'Canada', zh: '加拿大', code: 1 }],
  [1, { countriesAndRegions: 'UnitedStatesOfAmerica', zh: '美国', code: 1 }],
  [7, { countriesAndRegions: 'Russia', zh: '俄罗斯', code: 7 }],
  [20, { countriesAndRegions: 'Egypt', zh: '埃及', code: 20 }],
  [27, { countriesAndRegions: 'SouthAfrica', zh: '南非', code: 27 }],
  [30, { countriesAndRegions: 'Greece', zh: '希腊', code: 30 }],
  [31, { countriesAndRegions: 'Netherlands', zh: '荷兰', code: 31 }],
  [32, { countriesAndRegions: 'Belgium', zh: '比利时', code: 32 }],
  [33, { countriesAndRegions: 'France', zh: '法国', code: 33 }],
  [34, { countriesAndRegions: 'Spain', zh: '西班牙', code: 34 }],
  [36, { countriesAndRegions: 'Hungary', zh: '匈牙利', code: 36 }],
  [39, { countriesAndRegions: 'Italy', zh: '意大利', code: 39 }],
  [40, { countriesAndRegions: 'Romania', zh: '罗马尼亚', code: 40 }],
  [41, { countriesAndRegions: 'Switzerland', zh: '瑞士', code: 41 }],
  [43, { countriesAndRegions: 'Austria', zh: '奥地利', code: 43 }],
  [44, { countriesAndRegions: 'UnitedKiongdom', zh: '英国', code: 44 }],
  [45, { countriesAndRegions: 'Denmark', zh: '丹麦', code: 45 }],
  [46, { countriesAndRegions: 'Sweden', zh: '瑞典', code: 46 }],
  [47, { countriesAndRegions: 'Norway', zh: '挪威', code: 47 }],
  [48, { countriesAndRegions: 'Poland', zh: '波兰', code: 48 }],
  [49, { countriesAndRegions: 'Germany', zh: '德国', code: 49 }],
  [51, { countriesAndRegions: 'Peru', zh: '秘鲁', code: 51 }],
  [52, { countriesAndRegions: 'Mexico', zh: '墨西哥', code: 52 }],
  [53, { countriesAndRegions: 'Cuba', zh: '古巴', code: 53 }],
  [54, { countriesAndRegions: 'Argentina', zh: '阿根廷', code: 54 }],
  [55, { countriesAndRegions: 'Brazil', zh: '巴西', code: 55 }],
  [56, { countriesAndRegions: 'Chile', zh: '智利', code: 56 }],
  [57, { countriesAndRegions: 'Colombia', zh: '哥伦比亚', code: 57 }],
  [58, { countriesAndRegions: 'Venezuela', zh: '委内瑞拉', code: 58 }],
  [60, { countriesAndRegions: 'Malaysia', zh: '马来西亚', code: 60 }],
  [61, { countriesAndRegions: 'Australia', zh: '澳大利亚', code: 61 }],
  [62, { countriesAndRegions: 'Indonesia', zh: '印度尼西亚', code: 62 }],
  [63, { countriesAndRegions: 'Philippines', zh: '菲律宾', code: 63 }],
  [64, { countriesAndRegions: 'NewZealand', zh: '新西兰', code: 64 }],
  [65, { countriesAndRegions: 'Singapore', zh: '新加坡', code: 65 }],
  [66, { countriesAndRegions: 'Thailand', zh: '泰国', code: 66 }],
  [81, { countriesAndRegions: 'Japan', zh: '日本', code: 81 }],
  [82, { countriesAndRegions: 'Korea', zh: '韩国', code: 82 }],
  [84, { countriesAndRegions: 'Vietnam', zh: '越南', code: 84 }],
  [86, { countriesAndRegions: 'China', zh: '中国', code: 86 }],
  [90, { countriesAndRegions: 'Turkey', zh: '土耳其', code: 90 }],
  [91, { countriesAndRegions: 'India', zh: '印度', code: 91 }],
  [92, { countriesAndRegions: 'Pakistan', zh: '巴基斯坦', code: 92 }],
  [93, { countriesAndRegions: 'Afghanistan', zh: '阿富汗', code: 93 }],
  [94, { countriesAndRegions: 'SriLanka', zh: '斯里兰卡', code: 94 }],
  [95, { countriesAndRegions: 'Burma', zh: '缅甸', code: 95 }],
  [98, { countriesAndRegions: 'Iran', zh: '伊朗', code: 98 }],
  [212, { countriesAndRegions: 'Morocco', zh: '摩洛哥', code: 212 }],
  [213, { countriesAndRegions: 'Algeria', zh: '阿尔及利亚', code: 213 }],
  [216, { countriesAndRegions: 'Tunisia', zh: '突尼斯', code: 216 }],
  [218, { countriesAndRegions: 'Libya', zh: '利比亚', code: 218 }],
  [220, { countriesAndRegions: 'Gambia', zh: '冈比亚', code: 220 }],
  [221, { countriesAndRegions: 'Senegal', zh: '塞内加尔', code: 221 }],
  [223, { countriesAndRegions: 'Mali', zh: '马里', code: 223 }],
  [224, { countriesAndRegions: 'Guinea', zh: '几内亚', code: 224 }],
  [225, { countriesAndRegions: 'IvoryCoast', zh: '科特迪瓦', code: 225 }],
  [226, { countriesAndRegions: 'Burkina-faso', zh: '布基纳法索', code: 226 }],
  [227, { countriesAndRegions: 'Niger', zh: '尼日尔', code: 227 }],
  [228, { countriesAndRegions: 'Togo', zh: '多哥', code: 228 }],
  [229, { countriesAndRegions: 'Benin', zh: '贝宁', code: 229 }],
  [230, { countriesAndRegions: 'Mauritius', zh: '毛里求斯', code: 230 }],
  [231, { countriesAndRegions: 'Liberia', zh: '利比里亚', code: 231 }],
  [232, { countriesAndRegions: 'SierraLeone', zh: '塞拉利昂', code: 232 }],
  [233, { countriesAndRegions: 'Ghana', zh: '加纳', code: 233 }],
  [233, { countriesAndRegions: 'Uzbekistan', zh: '乌兹别克斯坦', code: 233 }],
  [234, { countriesAndRegions: 'Nigeria', zh: '尼日利亚', code: 234 }],
  [235, { countriesAndRegions: 'Chad', zh: '乍得', code: 235 }],
  [
    236,
    {
      countriesAndRegions: 'CentralAfricanRepublic',
      zh: '中非共和国',
      code: 236,
    },
  ],
  [237, { countriesAndRegions: 'Cameroon', zh: '喀麦隆', code: 237 }],
  [
    239,
    {
      countriesAndRegions: 'SaoTomeAndPrincipe',
      zh: '圣多美和普林西比',
      code: 239,
    },
  ],
  [241, { countriesAndRegions: 'Gabon', zh: '加蓬', code: 241 }],
  [242, { countriesAndRegions: 'Congo', zh: '刚果', code: 242 }],
  [243, { countriesAndRegions: 'Zaire', zh: '扎伊尔', code: 243 }],
  [244, { countriesAndRegions: 'Angola', zh: '安哥拉', code: 244 }],
  [247, { countriesAndRegions: 'Ascension', zh: '阿森松', code: 247 }],
  [248, { countriesAndRegions: 'Seychelles', zh: '塞舌尔', code: 248 }],
  [249, { countriesAndRegions: 'Sudan', zh: '苏丹', code: 249 }],
  [251, { countriesAndRegions: 'Ethiopia', zh: '埃塞俄比亚', code: 251 }],
  [252, { countriesAndRegions: 'Somali', zh: '索马里', code: 252 }],
  [253, { countriesAndRegions: 'Djibouti', zh: '吉布提', code: 253 }],
  [254, { countriesAndRegions: 'Kenya', zh: '肯尼亚', code: 254 }],
  [255, { countriesAndRegions: 'Tanzania', zh: '坦桑尼亚', code: 255 }],
  [256, { countriesAndRegions: 'Uganda', zh: '乌干达', code: 256 }],
  [257, { countriesAndRegions: 'Burundi', zh: '布隆迪', code: 257 }],
  [258, { countriesAndRegions: 'Mozambique', zh: '莫桑比克', code: 258 }],
  [260, { countriesAndRegions: 'Zambia', zh: '赞比亚', code: 260 }],
  [261, { countriesAndRegions: 'Madagascar', zh: '马达加斯加', code: 261 }],
  [262, { countriesAndRegions: 'Reunion', zh: '留尼旺', code: 262 }],
  [263, { countriesAndRegions: 'Zimbabwe', zh: '津巴布韦', code: 263 }],
  [264, { countriesAndRegions: 'Namibia', zh: '纳米比亚', code: 264 }],
  [265, { countriesAndRegions: 'Malawi', zh: '马拉维', code: 265 }],
  [266, { countriesAndRegions: 'Lesotho', zh: '莱索托', code: 266 }],
  [267, { countriesAndRegions: 'Botswana', zh: '博茨瓦纳', code: 267 }],
  [268, { countriesAndRegions: 'Swaziland', zh: '斯威士兰', code: 268 }],
  [327, { countriesAndRegions: 'Kazakstan', zh: '哈萨克斯坦', code: 327 }],
  [331, { countriesAndRegions: 'Kyrgyzstan', zh: '吉尔吉斯坦', code: 331 }],
  [350, { countriesAndRegions: 'Gibraltar', zh: '直布罗陀', code: 350 }],
  [351, { countriesAndRegions: 'Portugal', zh: '葡萄牙', code: 351 }],
  [352, { countriesAndRegions: 'Luxembourg', zh: '卢森堡', code: 352 }],
  [353, { countriesAndRegions: 'Ireland', zh: '爱尔兰', code: 353 }],
  [354, { countriesAndRegions: 'Iceland', zh: '冰岛', code: 354 }],
  [355, { countriesAndRegions: 'Albania', zh: '阿尔巴尼亚', code: 355 }],
  [356, { countriesAndRegions: 'Malta', zh: '马耳他', code: 356 }],
  [357, { countriesAndRegions: 'Cyprus', zh: '塞浦路斯', code: 357 }],
  [358, { countriesAndRegions: 'Finland', zh: '芬兰', code: 358 }],
  [359, { countriesAndRegions: 'Bulgaria', zh: '保加利亚', code: 359 }],
  [370, { countriesAndRegions: 'Lithuania', zh: '立陶宛', code: 370 }],
  [371, { countriesAndRegions: 'Latvia', zh: '拉脱维亚', code: 371 }],
  [372, { countriesAndRegions: 'Estonia', zh: '爱沙尼亚', code: 372 }],
  [
    373,
    { countriesAndRegions: 'Moldova,RepublicOf', zh: '摩尔多瓦', code: 373 },
  ],
  [374, { countriesAndRegions: 'Armenia', zh: '亚美尼亚', code: 374 }],
  [375, { countriesAndRegions: 'Belarus', zh: '白俄罗斯', code: 375 }],
  [376, { countriesAndRegions: 'Andorra', zh: '安道尔共和国', code: 376 }],
  [377, { countriesAndRegions: 'Monaco', zh: '摩纳哥', code: 377 }],
  [378, { countriesAndRegions: 'SanMarino', zh: '圣马力诺', code: 378 }],
  [380, { countriesAndRegions: 'Ukraine', zh: '乌克兰', code: 380 }],
  [381, { countriesAndRegions: 'Yugoslavia', zh: '南斯拉夫', code: 381 }],
  [386, { countriesAndRegions: 'Slovenia', zh: '斯洛文尼亚', code: 386 }],
  [420, { countriesAndRegions: 'CzechRepublic', zh: '捷克', code: 420 }],
  [421, { countriesAndRegions: 'Slovakia', zh: '斯洛伐克', code: 421 }],
  [423, { countriesAndRegions: 'Liechtenstein', zh: '列支敦士登', code: 423 }],
  [501, { countriesAndRegions: 'Belize', zh: '伯利兹', code: 501 }],
  [502, { countriesAndRegions: 'Guatemala', zh: '危地马拉', code: 502 }],
  [503, { countriesAndRegions: 'EISalvador', zh: '萨尔瓦多', code: 503 }],
  [504, { countriesAndRegions: 'Honduras', zh: '洪都拉斯', code: 504 }],
  [505, { countriesAndRegions: 'Nicaragua', zh: '尼加拉瓜', code: 505 }],
  [506, { countriesAndRegions: 'CostaRica', zh: '哥斯达黎加', code: 506 }],
  [507, { countriesAndRegions: 'Panama', zh: '巴拿马', code: 507 }],
  [509, { countriesAndRegions: 'Haiti', zh: '海地', code: 509 }],
  [591, { countriesAndRegions: 'Bolivia', zh: '玻利维亚', code: 591 }],
  [592, { countriesAndRegions: 'Guyana', zh: '圭亚那', code: 592 }],
  [593, { countriesAndRegions: 'Ecuador', zh: '厄瓜多尔', code: 593 }],
  [594, { countriesAndRegions: 'FrenchGuiana', zh: '法属圭亚那', code: 594 }],
  [595, { countriesAndRegions: 'Paraguay', zh: '巴拉圭', code: 595 }],
  [596, { countriesAndRegions: 'Martinique', zh: '马提尼克', code: 596 }],
  [597, { countriesAndRegions: 'Suriname', zh: '苏里南', code: 597 }],
  [598, { countriesAndRegions: 'Uruguay', zh: '乌拉圭', code: 598 }],
  [
    599,
    {
      countriesAndRegions: 'NetheriandsAntilles',
      zh: '荷属安的列斯',
      code: 599,
    },
  ],
  [673, { countriesAndRegions: 'Brunei', zh: '文莱', code: 673 }],
  [674, { countriesAndRegions: 'Nauru', zh: '瑙鲁', code: 674 }],
  [
    675,
    { countriesAndRegions: 'PapuaNewCuinea', zh: '巴布亚新几内亚', code: 675 },
  ],
  [676, { countriesAndRegions: 'Tonga', zh: '汤加', code: 676 }],
  [677, { countriesAndRegions: 'SolomonIs', zh: '所罗门群岛', code: 677 }],
  [679, { countriesAndRegions: 'Fiji', zh: '斐济', code: 679 }],
  [682, { countriesAndRegions: 'CookIs.', zh: '库克群岛', code: 682 }],
  [684, { countriesAndRegions: 'SamoaEastern', zh: '东萨摩亚(美)', code: 684 }],
  [685, { countriesAndRegions: 'SamoaWestern', zh: '西萨摩亚', code: 685 }],
  [
    689,
    { countriesAndRegions: 'FrenchPolynesia', zh: '法属玻利尼西亚', code: 689 },
  ],
  [850, { countriesAndRegions: 'NorthKorea', zh: '朝鲜', code: 850 }],
  [852, { countriesAndRegions: 'Hongkong', zh: '香港', code: 852 }],
  [853, { countriesAndRegions: 'Macao', zh: '澳门', code: 853 }],
  [
    855,
    { countriesAndRegions: 'Kampuchea(Cambodia)', zh: '柬埔寨', code: 855 },
  ],
  [856, { countriesAndRegions: 'Laos', zh: '老挝', code: 856 }],
  [880, { countriesAndRegions: 'Bangladesh', zh: '孟加拉国', code: 880 }],
  [886, { countriesAndRegions: 'Taiwan', zh: '台湾省', code: 886 }],
  [960, { countriesAndRegions: 'Maldives', zh: '马尔代夫', code: 960 }],
  [961, { countriesAndRegions: 'Lebanon', zh: '黎巴嫩', code: 961 }],
  [962, { countriesAndRegions: 'Jordan', zh: '约旦', code: 962 }],
  [963, { countriesAndRegions: 'Syria', zh: '叙利亚', code: 963 }],
  [964, { countriesAndRegions: 'Iraq', zh: '伊拉克', code: 964 }],
  [965, { countriesAndRegions: 'Kuwait', zh: '科威特', code: 965 }],
  [966, { countriesAndRegions: 'SaudiArabia', zh: '沙特阿拉伯', code: 966 }],
  [967, { countriesAndRegions: 'Yemen', zh: '也门', code: 967 }],
  [968, { countriesAndRegions: 'Oman', zh: '阿曼', code: 968 }],
  [
    971,
    {
      countriesAndRegions: 'UnitedArabEmirates',
      zh: '阿拉伯联合酋长国',
      code: 971,
    },
  ],
  [972, { countriesAndRegions: 'Israel', zh: '以色列', code: 972 }],
  [973, { countriesAndRegions: 'Bahrain', zh: '巴林', code: 973 }],
  [974, { countriesAndRegions: 'Qatar', zh: '卡塔尔', code: 974 }],
  [976, { countriesAndRegions: 'Mongolia', zh: '蒙古', code: 976 }],
  [977, { countriesAndRegions: 'Nepal', zh: '尼泊尔', code: 977 }],
  [992, { countriesAndRegions: 'Tajikstan', zh: '塔吉克斯坦', code: 992 }],
  [993, { countriesAndRegions: 'Turkmenistan', zh: '土库曼斯坦', code: 993 }],
  [994, { countriesAndRegions: 'Azerbaijan', zh: '阿塞拜疆', code: 994 }],
  [995, { countriesAndRegions: 'Georgia', zh: '格鲁吉亚', code: 995 }],
  [1242, { countriesAndRegions: 'Bahamas', zh: '巴哈马', code: 1242 }],
  [1246, { countriesAndRegions: 'Barbados', zh: '巴巴多斯', code: 1246 }],
  [1264, { countriesAndRegions: 'Anguilla', zh: '安圭拉岛', code: 1264 }],
  [
    1268,
    {
      countriesAndRegions: 'AntiguaAndBarbuda',
      zh: '安提瓜和巴布达',
      code: 1268,
    },
  ],
  [1345, { countriesAndRegions: 'CaymanIs.', zh: '开曼群岛', code: 1345 }],
  [1441, { countriesAndRegions: 'BermudaIs.', zh: '百慕大群岛', code: 1441 }],
  [
    1664,
    { countriesAndRegions: 'MontserratIs', zh: '蒙特塞拉特岛', code: 1664 },
  ],
  [1670, { countriesAndRegions: 'MarianaIs', zh: '马里亚那群岛', code: 1670 }],
  [1671, { countriesAndRegions: 'Guam', zh: '关岛', code: 1671 }],
  [1758, { countriesAndRegions: 'SaintLueia', zh: '圣卢西亚', code: 1758 }],
  [1758, { countriesAndRegions: 'St.Lucia', zh: '圣卢西亚', code: 1758 }],
  [1784, { countriesAndRegions: 'SaintVincent', zh: '圣文森特岛', code: 1784 }],
  [1784, { countriesAndRegions: 'St.Vincent', zh: '圣文森特', code: 1784 }],
  [1787, { countriesAndRegions: 'PuertoRico', zh: '波多黎各', code: 1787 }],
  [1809, { countriesAndRegions: 'Grenada', zh: '格林纳达', code: 1809 }],
  [
    1809,
    {
      countriesAndRegions: 'TrinidadAndTobago',
      zh: '特立尼达和多巴哥',
      code: 1809,
    },
  ],
  [1876, { countriesAndRegions: 'Jamaica', zh: '牙买加', code: 1876 }],
  [
    1890,
    { countriesAndRegions: 'DominicaRep.', zh: '多米尼加共和国', code: 1890 },
  ],
]);

export type Role = 'ordinaryMember' | 'bronzeMember' | null;

const roleMap: Map<Role, { role: Role; displayNameCn: string }> = new Map([
  ['ordinaryMember', { role: 'ordinaryMember', displayNameCn: '普通会员' }],
  ['bronzeMember', { role: 'bronzeMember', displayNameCn: '青铜会员' }],
]);

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    length: 100,
    type: 'varchar',
    nullable: false,
  })
  username: string;

  @Column({
    length: 100,
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    length: 32,
    type: 'char',
    nullable: false,
  })
  slat: string;

  @Column({
    type: 'enum',
    enum: [...roleMap.keys()],
    default: roleMap.keys().next().value,
  })
  role: Role;

  @Column({
    length: 100,
    type: 'varchar',
    nullable: true,
  })
  email: string;

  @Column({
    type: 'enum',
    enum: [...CountryCallingMap.keys()],
    default: 86,
    nullable: true,
  })
  countryCallingCode: CountryCallingCodeType;

  @Column({
    length: 20,
    type: 'varchar',
    nullable: true,
  })
  phone: number;

  @Column({ default: true })
  isActive: boolean;
}
