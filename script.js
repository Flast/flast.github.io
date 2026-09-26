const KeikenchiDetail = Vue.createApp({
  data() {
    return {
      list: [
        { name: "北海道",   score: 30,  url: "https://uub.jp/k.cgi/1/zfziyodqfdriqtfnSiuIipociwziqIirrzfu/" },
        { name: "青森県",   score: 12,  url: "https://uub.jp/k.cgi/2/zixdqiuzezfteziwziqnfy/" },
        { name: "岩手県",   score: 12,  url: "https://uub.jp/k.cgi/3/dqiqzfzezenezziponfv/" },
        { name: "宮城県",   score: 15,  url: "https://uub.jp/k.cgi/4/fzfzfzfnfniqzivdrivdqx/" },
        { name: "秋田県",   score: 14,  url: "https://uub.jp/k.cgi/5/IftziuceIiplq/" },
        { name: "山形県",   score: 5,   url: "https://uub.jp/k.cgi/6/iqpzIeo/" },
        { name: "福島県",   score: 13,  url: "https://uub.jp/k.cgi/7/lpzfnipuziqdrezenfzfzip/" },
        { name: "茨城県",   score: 24,  url: "https://uub.jp/k.cgi/8/iySirciuciqaYixnceezl/" },
        { name: "栃木県",   score: 19,  url: "https://uub.jp/k.cgi/9/nfdrfzSfzfIfzfniuv/" },
        { name: "群馬県",   score: 14,  url: "https://uub.jp/k.cgi/10/yniqniusivcirziw/" },
        { name: "埼玉県",   score: 38,  url: "https://uub.jp/k.cgi/11/iponirzfnfdrYedqedqfzeENdqYippcr/" },
        { name: "千葉県",   score: 23,  url: "https://uub.jp/k.cgi/12/ilrViqcezfzfzeniqtezetXo/" },
        { name: "東京都",   score: 113, url: "https://uub.jp/k.cgi/13/iysezSfzfdrIdusztnStszbpotbuabro/" },
        { name: "神奈川県", score: 34,  url: "https://uub.jp/k.cgi/14/zfztfLiqcdrbqIenivdqfw/" },
        { name: "新潟県",   score: 19,  url: "https://uub.jp/k.cgi/15/oIfIfzIiwciqecipr/" },
        { name: "富山県",   score: 12,  url: "https://uub.jp/k.cgi/16/zfzfnfnIniqq/" },
        { name: "石川県",   score: 30,  url: "https://uub.jp/k.cgi/17/zEdrfzItdqfatzIo/" },
        { name: "福井県",   score: 7,   url: "https://uub.jp/k.cgi/18/uzedriqnip/" },
        { name: "山梨県",   score: 25,  url: "https://uub.jp/k.cgi/19/dqSfLdqIirInixv/" },
        { name: "長野県",   score: 69,  url: "https://uub.jp/k.cgi/20/tSfziqVezipuzfzfdrciqVivIdqszIzIzXfSacixnq/" },
        { name: "岐阜県",   score: 5,   url: "https://uub.jp/k.cgi/21/ipuzivzfipqzenv/" },
        { name: "静岡県",   score: 17,  url: "https://uub.jp/k.cgi/22/iuzfzezezfdveduirzfzu/" },
        { name: "愛知県",   score: 13,  url: "https://uub.jp/k.cgi/23/ipwziwzfzezirdqfzeziqzfniqzq/" },
        { name: "滋賀県",   score: 13,  url: "https://uub.jp/k.cgi/25/qenezfdwfdl/" },
        { name: "京都府",   score: 9,   url: "https://uub.jp/k.cgi/26/SiwIipoziuv/" },
        { name: "大阪府",   score: 25,  url: "https://uub.jp/k.cgi/27/rtfzezirtafnipotfzedqiqnIip/" },
        { name: "兵庫県",   score: 17,  url: "https://uub.jp/k.cgi/28/iqziplziqnfdqfdrIirziqzv/" },
        { name: "鳥取県",   score: 2,   url: "https://uub.jp/k.cgi/31/putiqip/" },
        { name: "島根県",   score: 7,   url: "https://uub.jp/k.cgi/32/ipvEIo//" },
        { name: "岡山県",   score: 8,   url: "https://uub.jp/k.cgi/33/fzeztiplziqnezy/" },
        { name: "広島県",   score: 17,  url: "https://uub.jp/k.cgi/34/niqdrfIivdqeIv/" },
        { name: "山口県",   score: 14,  url: "https://uub.jp/k.cgi/35/rcnfnIirzfniv/" },
        { name: "香川県",   score: 3,   url: "https://uub.jp/k.cgi/37/ipvco/" },
        { name: "愛媛県",   score: 4,   url: "https://uub.jp/k.cgi/38/yIipl/" },
        { name: "福岡県",   score: 19,  url: "https://uub.jp/k.cgi/40/lodqiqzirzfzirnfzixziunFip/" },
        { name: "佐賀県",   score: 1,   url: "https://uub.jp/k.cgi/41/ipwzeo/" },
        { name: "熊本県",   score: 11,  url: "https://uub.jp/k.cgi/43/ipodqipunirzfzeneno/" },
        { name: "大分県",   score: 11,  url: "https://uub.jp/k.cgi/44/ftiqciwIzezl/" },
        { name: "鹿児島県", score: 14,  url: "https://uub.jp/k.cgi/46/iqziqIilrziuzEVy/" },
      ]
    }
  }
})
KeikenchiDetail.component('keikenchi-pref', {
  props: ['pref'],
  template: '<th>{{ pref.name }}</th>'
})
KeikenchiDetail.component('keikenchi-score', {
  props: ['pref'],
  template: '<td><a :href="pref.url">{{ pref.score }}点</a></td>'
})
KeikenchiDetail.mount('#keikenchi-detail')

const BriefingPapers = Vue.createApp({
  data() {
    return {
      list: [
        { title: '並行・並列へのC++としてのアプローチ',
          link: 'https://www.slideshare.net/freedom404/boost9-session',
          conference: 'Boost.勉強会 #9 つくば',
          conference_link: 'https://boostjp.github.io/study_meeting/study9' },
        { title: 'オーブンレンジ2014夏モデル',
          link: './article/boost-15-sapporo/index.html',
          conference: 'Boost.勉強会 #15 札幌',
          conference_link: 'https://boostjp.github.io/study_meeting/study15' },
        { title: '便利！電動歯ブラシ',
          link: './article/boost-16-osaka/index.html',
          conference: 'Boost.勉強会 #16 大阪',
          conference_link: 'https://boostjp.github.io/study_meeting/study16' },
        { title: 'Boost.ConfigとSG10と',
          link: './article/boost-19-tokyo/index.html',
          conference: 'Boost.勉強会 #19 東京',
          conference_link: 'https://boostjp.github.io/study_meeting/study19' },
        { title: '明日から使える（かは分からない）Qt',
          link: './article/meetup-app1/index.html',
          conference: 'meetup app tokyo@1',
          conference_link: 'http://meetupapp.connpass.com/event/33555/' },
        { title: 'Boost.Fusion/Phoenixのメンテナになったのでその記念的ななにか',
          link: './article/boost-20-tokyo/index.html',
          conference: 'Boost.勉強会 #20 東京',
          conference_link: 'https://boostjp.github.io/study_meeting/study20' },
        { title: 'Boost.Fusion/Phoenixのメンテナになったのでその記念的ななにか in 札幌',
          link: './article/boost-21-sapporo/index.html',
          conference: 'Boost.勉強会 #21 札幌',
          conference_link: 'https://boostjp.github.io/study_meeting/study21' },
        { title: 'std::invokeとかstd::result_ofとか',
          link: './article/ebisu-feature-5/index.html',
          conference: 'ebisu_feature.cpp vol.5',
          conference_link: 'https://ebisu-effective-modern-cpp.connpass.com/event/79032/' },
        { title: '題名のないスライド21',
          link: './article/nakameguro-feature-6/index.html',
          conference: 'nakameguro_feature.cpp vol.6',
          conference_link: 'https://ebisu-effective-modern-cpp.connpass.com/event/96872/' },
        { title: 'なんとか（当日までに考える）',
          link: './article/nakameguro-feature-16/index.html',
          conference: 'nakameguro_feature.cpp vol.16',
          conference_link: 'https://ebisu-effective-modern-cpp.connpass.com/event/119907/' },
        { title: '書籍『独習C++』の改訂について (仮)',
          link: 'https://docs.google.com/presentation/d/1dfJ537pkSwYYRai4mktlAoHwNnqmnOUqfmQiVjDJClY/preview',
          conference: 'C++MIX #6',
          conference_link: 'https://cppmix.connpass.com/event/150527/' },
      ]
    }
  }
})
BriefingPapers.component('paper-list', {
  props: ['paper'],
  template: '<li><a :href="paper.link">{{ paper.title }}</a> - <a :href="paper.conference_link">{{ paper.conference }}</a></li>'
})
BriefingPapers.mount('#briefing-papers')

const SGPapers = Vue.createApp({
  data() {
    return {
      list: [
        { authors: [ '高橋航平', '塙敏博', '朴泰祐', '児玉祐悦', '扇谷豪', '佐藤三久' ],
          title: '各種アプリケーションにおけるGPGPU対Many Core Processorの性能比較',
          conference: '情報処理学会研究報告',
          journal: '2013-HPC-139(21)',
          section: 'pp.1-7',
          date: 'May/2013',
          link: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=92465&item_no=1&page_id=13&block_id=8',
          link_subject: 'IPSJ電子図書館' }
      ]
    }
  }
})
SGPapers.component('paper-list', {
  props: ['paper'],
  template: '<li>{{ paper.authors.join(", ") }}. {{ paper.title }}. {{ paper.conference }}, {{ paper.journal }}, {{ paper.section }}, {{ paper.date }}. [<a :href="paper.link">{{ paper.link_subject }}</a>]</li>'
})
SGPapers.mount('#study-group-without-review')

const Publications = Vue.createApp({
  data() {
    return {
      list: [
        { authors: [ '高橋航平(著)', 'επιστημη(監修)' ],
          title: '独習C++ 新版',
          publisher: '翔泳社',
          date: 'Nov/2019',
          link: 'https://www.shoeisha.co.jp/book/detail/9784798150239' }
      ]
    }
  }
})
Publications.component('book-list', {
  props: ['book'],
  template: '<li>{{ book.authors.join(", ") }}. {{ book.title }}. {{ book.publisher }}, {{ book.date }}. <a :href="book.link">{{ book.link }}</a>.</li>'
})
Publications.mount('#publications')

const Qualifications = Vue.createApp({
  data() {
    return {
      list: [
        { title: 'パソコン検定協会主催 パソコン検定試験 P検2006 - 準2級 合格',
          title_en: 'Personal & Professional Computing Skills Test - Pre 2nd Grade',
          date: '12/Jun/2006' },
        { title: 'パソコン検定協会主催 パソコン検定試験 P検2006 - 2級 合格',
          title_en: 'Personal & Professional Computing Skills Test - 2nd Grade',
          date: '26/Jan/2007' },
        { title: 'パソコン検定協会主催 パソコン検定試験 P検2006 - 準1級 合格',
          title_en: 'Personal & Professional Computing Skills Test - Pre 1st Grade',
          date: '15/Mar/2007' },
        { title: '情報処理技術者試験 初級システムアドミニストレータ試験 合格',
          date: '11/May/2007' },
        { title: '航空特殊無線技士 免許 取得',
          date: '13/Jul/2007' },
        { title: '情報処理技術者試験 ソフトウェア開発技術者試験 合格',
          date: '17/Dec/2007' },
        { title: '情報処理技術者試験 基本情報技術者試験 合格',
          date: '16/May/2008' },
        { title: 'パソコン検定協会主催 P検1級 合格',
          title_en: 'ICT Proficiency Assessment - 1st Grade',
          date: '28/Jul/2008' },
        { title: '第二級陸上特殊無線技士 免許 取得',
          date: '29/Jan/2009' },
        { title: '危険物取扱者 乙種第4類 免許 取得',
          date: '12/Oct/2018' },
        { title: '鉛作業主任者技能講習 修了',
          date: '26/Oct/2018' },
        { title: '危険物取扱者 乙種第2類 免許 取得',
          date: '10/Jan/2019' },
        { title: '危険物取扱者 乙種第5類 免許 取得',
          date: '10/Jan/2019' },
        { title: 'エックス線作業主任者 免許 取得',
          date: '17/Jan/2019' },
        { title: '有機溶剤作業主任者技能講習 修了',
          date: '25/Jan/2019' },
        { title: '危険物取扱者 乙種第1類 免許 取得',
          date: '19/Feb/2019' },
        { title: '危険物取扱者 乙種第6類 免許 取得',
          date: '19/Feb/2019' },
        { title: '危険物取扱者 乙種第3類 免許 取得',
          date: '19/Mar/2019' },
        { title: '危険物取扱者 乙種第3類 免許 取得',
          date: '19/Mar/2019' },
        { title: '消防設備士 乙種第4類 免許 取得',
          date: '18/Apr/2019' },
        { title: '毒物劇物取扱者試験 合格',
          date: '14/Aug/2019' },
        { title: '第一級小型船舶操縦免許 取得',
          date: '19/Aug/2019' },
        { title: '高圧ガス移動監視者講習(一般) 修了',
          date: '20/Sep/2019' },
        { title: '玉掛け技能講習 修了',
          date: '07/Aug/2021' },
        { title: '発破技士 免許 取得',
          date: '22/Sep/2021' },
        { title: '消防設備士 乙種第7類 免許 取得',
          date: '19/Oct/2021' },
        { title: '特定化学物質及び四アルキル鉛等作業主任者講習 修了',
          date: '02/Feb/2024' }
      ]
    }
  }
})
Qualifications.component('qual-date', {
  props: ['qual'],
  template: '<th>{{ qual.date }}</th>'
})
Qualifications.component('qual-title', {
  props: ['qual'],
  template: '<td>{{ qual.title }}<br/>{{ qual.title_en }}</td>'
})
Qualifications.mount('#qualifications')
