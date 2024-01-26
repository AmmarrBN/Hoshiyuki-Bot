import axios from "axios"
import cheerio from "cheerio"
import got from "got"

async function tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });
  let result = {
    creator: "HIROOSY",
    title: clean(response.data.desc),
    author: clean(response.data.author),
    noWM: await shortener((response.data.links[0].a || "").replace("https", "http")),
    wm: await shortener((response.data.links[4].a || "").replace("https", "http")),
    audio: await shortener((response.data.links[5].a || "").replace("https", "http")),
    thumbnail: await shortener(response.data.cover)
  }
  return result
}

async function tiktokv2(url) {
    try {
        function API_URL(aweme) {
            return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
        };
        async function getAwemeId(url) {
    // any :/
            let result;
            const Konto1 = /video\/([\d|\+]+)?\/?/;
            const valid = url.match(Konto1);
            if (valid) {
                return valid[1];
            }
            else {
                try {
                    const data = await got
                    .get(url, {
                        headers: {
                            'Accept-Encoding': 'deflate',
                        },
                        maxRedirects: 0,
                    })
                    .catch((e) => e.response.headers.location);
                    const _url = data;
                    const _valid = _url.match(Konto1);
                    if (_valid) {
                        result = _valid[1];
                    }
                }
                catch (error) {
            // console.log(error)
                    result = false;
                }
            }
            return result;
        };
        const valid = await getAwemeId(url);
        //if (!valid) return false // result = false
        const data = await got
        .get(API_URL(valid), {
            headers: {
                'Accept-Encoding': 'deflate',
                'User-Agent': 'okhttp/3.14.9',
            },
        })
        .catch((e) => e.response);
        //if (!data) return false // result = false
        const body = JSON.parse(data.body);
        const obj = body.aweme_list.find((o) => o.aweme_id === valid)
        const results = {
            region: obj.region,
            desc: obj.desc,
            create_time: obj.create_time,
            author: {          
                uid: obj.author.uid,
                unique_id: obj.author.unique_id,
                nickname: obj.author.nickname,
                birthday: obj.author.birthday,                
                avatar_larger: obj.author.avatar_larger.url_list[0],
                avatar_thumb: obj.author.avatar_thumb.url_list[0],
                avatar_medium: obj.author.avatar_medium.url_list[0]
            },
            statistics: {
                comment_count: obj.statistics.comment_count,
                digg_count: obj.statistics.digg_count,
                download_count: obj.statistics.download_count,
                play_count: obj.statistics.play_count,
                share_count: obj.statistics.share_count
            },              
            duration: obj.music.duration,
            download: {
                nowm: obj.video.play_addr.url_list[0],
                wm: obj.video.download_addr.url_list[0],
                dynamic_cover: obj.video.dynamic_cover.url_list[0],
                origin_cover: obj.video.origin_cover.url_list[0],
                music: obj.music.play_url.url_list[0],
            },
        };
        return {
            status: true,
            result: results//data.body //valid
        }
    } catch (e) {
        return { status: false, result: e }
    }
}

function shortener(url) {
  return url;
}

function clean(data) {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
}

async function tiktokStalk(user) {
  let res = await axios.get(`https://urlebird.com/user/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
  obj.name = $('h1.user').text().trim()
  obj.username = $('div.content > h5').text().trim()
  obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
  obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
  obj.description = $('div.content > p').text().trim()
  return obj
}
export { tiktok, tiktokv2, tiktokStalk }