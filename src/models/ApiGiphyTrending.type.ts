interface TrendingDataImages {
  original: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;

    frames: string;
    hash: string;
  };
  downsized: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  downsized_large: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  downsized_medium: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  downsized_small: {
    height: string;
    width: string;

    mp4_size: string;
    mp4: string;
  };
  downsized_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_height: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames?: string;
    hash?: string;
  };
  fixed_height_downsampled: {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
    webp_height?: string;
    webp_width?: string;
  };
  fixed_height_small: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
  fixed_height_small_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_height_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_width: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames?: string;
    hash?: string;
  };
  fixed_width_downsampled: {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
    webp_height?: string;
    webp_width?: string;
  };
  fixed_width_small: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
  fixed_width_small_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  fixed_width_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  looping: {
    mp4_size: string;
    mp4: string;
  };
  original_still: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  original_mp4: {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
  };

  preview: {
    height: string;
    width: string;
    mp4_size: string;

    mp4: string;
  };
  preview_gif: {
    height: string;
    width: string;

    size: string;
    url: string;
  };
  preview_webp: {
    height: string;
    width: string;
    size: string;
    url: string;
  };
  hd?: {
    height: string;
    width: string;
    mp4_size: string;

    mp4: string;
  };
  "480w_still": {
    height: string;
    width: string;
    size: string;
    url: string;
  };
}

interface TrendingData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: TrendingDataImages;
  user: {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
  };
  analytics_response_payload: string;
  analytics: {
    onload: {
      url: string;
    };
    onclick: {
      url: string;
    };
    onsent: {
      url: string;
    };
  };
}

export interface IApiGiphyTrending {
  data: TrendingData[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

export const dataApi: IApiGiphyTrending = {
  data: [
    {
      type: "gif",
      id: "JSMIy717G4Q2Zjmibl",
      url: "https://giphy.com/gifs/crab-pikaole-JSMIy717G4Q2Zjmibl",
      slug: "crab-pikaole-JSMIy717G4Q2Zjmibl",
      bitly_gif_url: "https://gph.is/g/ajPNDMo",
      bitly_url: "https://gph.is/g/ajPNDMo",
      embed_url: "https://giphy.com/embed/JSMIy717G4Q2Zjmibl",
      username: "pikaole",
      source: "http://pikaole.com",
      title: "Marine Life Yes GIF by pikaole",
      rating: "g",
      content_url: "",
      source_tld: "pikaole.com",
      source_post_url: "http://pikaole.com",
      is_sticker: 0,
      import_datetime: "2022-10-30 08:14:45",
      trending_datetime: "0000-00-00 00:00:00",
      images: {
        original: {
          height: "480",
          width: "480",
          size: "417194",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
          mp4_size: "133461",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.mp4&ct=g",
          webp_size: "166270",
          webp: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.webp&ct=g",
          frames: "11",
          hash: "d46e16c60f1387a703a2a4aafdcc4aca",
        },
        downsized: {
          height: "480",
          width: "480",
          size: "417194",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
        },
        downsized_large: {
          height: "480",
          width: "480",
          size: "417194",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
        },
        downsized_medium: {
          height: "480",
          width: "480",
          size: "417194",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
        },
        downsized_small: {
          height: "480",
          width: "480",
          mp4_size: "133461",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy-downsized-small.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-downsized-small.mp4&ct=g",
        },
        downsized_still: {
          height: "480",
          width: "480",
          size: "417194",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy_s.gif&ct=g",
        },
        fixed_height: {
          height: "200",
          width: "200",
          size: "70583",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200.gif&ct=g",
          mp4_size: "27166",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200.mp4&ct=g",
          webp_size: "50196",
          webp: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200.webp&ct=g",
        },
        fixed_height_downsampled: {
          height: "200",
          width: "200",
          size: "46310",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200_d.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200_d.gif&ct=g",
          webp_size: "34368",
          webp: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200_d.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200_d.webp&ct=g",
        },
        fixed_height_small: {
          height: "100",
          width: "100",
          size: "27141",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100.gif&ct=g",
          mp4_size: "11843",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100.mp4&ct=g",
          webp_size: "22728",
          webp: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100.webp&ct=g",
        },
        fixed_height_small_still: {
          height: "100",
          width: "100",
          size: "3398",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100_s.gif&ct=g",
        },
        fixed_height_still: {
          height: "200",
          width: "200",
          size: "8901",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200_s.gif&ct=g",
        },
        fixed_width: {
          height: "200",
          width: "200",
          size: "70583",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200w.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w.gif&ct=g",
          mp4_size: "27166",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200w.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w.mp4&ct=g",
          webp_size: "50196",
          webp: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200w.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w.webp&ct=g",
        },
        fixed_width_downsampled: {
          height: "200",
          width: "200",
          size: "46310",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200w_d.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w_d.gif&ct=g",
          webp_size: "34368",
          webp: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200w_d.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w_d.webp&ct=g",
        },
        fixed_width_small: {
          height: "100",
          width: "100",
          size: "27141",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100w.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w.gif&ct=g",
          mp4_size: "11843",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100w.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w.mp4&ct=g",
          webp_size: "22728",
          webp: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100w.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w.webp&ct=g",
        },
        fixed_width_small_still: {
          height: "100",
          width: "100",
          size: "3398",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/100w_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w_s.gif&ct=g",
        },
        fixed_width_still: {
          height: "200",
          width: "200",
          size: "8901",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/200w_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w_s.gif&ct=g",
        },
        looping: {
          mp4_size: "1614426",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy-loop.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-loop.mp4&ct=g",
        },
        original_still: {
          height: "480",
          width: "480",
          size: "53183",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy_s.gif&ct=g",
        },
        original_mp4: {
          height: "480",
          width: "480",
          mp4_size: "133461",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.mp4&ct=g",
        },
        preview: {
          height: "292",
          width: "292",
          mp4_size: "20025",
          mp4: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy-preview.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-preview.mp4&ct=g",
        },
        preview_gif: {
          height: "110",
          width: "110",
          size: "48877",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy-preview.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-preview.gif&ct=g",
        },
        preview_webp: {
          height: "196",
          width: "196",
          size: "48174",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/giphy-preview.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-preview.webp&ct=g",
        },
        "480w_still": {
          height: "480",
          width: "480",
          size: "417194",
          url: "https://media0.giphy.com/media/JSMIy717G4Q2Zjmibl/480w_s.jpg?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=480w_s.jpg&ct=g",
        },
      },
      user: {
        avatar_url: "https://media1.giphy.com/avatars/pikaole/ppu75sEd3AqF.jpg",
        banner_image:
          "https://media1.giphy.com/headers/pikaole/5NR35Vot6vTv.jpg",
        banner_url: "https://media1.giphy.com/headers/pikaole/5NR35Vot6vTv.jpg",
        profile_url: "https://giphy.com/pikaole/",
        username: "pikaole",
        display_name: "pikaole",
        description:
          "Artist who loves drawing fish, marine life.\r\nSearch 'pikaole' on the App store, LINE & galaxy store!",
        instagram_url: "https://instagram.com/instagram pikaole",
        website_url: "http://pikaole.com",
        is_verified: true,
      },
      analytics_response_payload:
        "e=Z2lmX2lkPUpTTUl5NzE3RzRRMlpqbWlibCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc",
      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUpTTUl5NzE3RzRRMlpqbWlibCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc&action_type=SEEN",
        },
        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUpTTUl5NzE3RzRRMlpqbWlibCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc&action_type=CLICK",
        },
        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUpTTUl5NzE3RzRRMlpqbWlibCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc&action_type=SENT",
        },
      },
    },
    {
      type: "gif",
      id: "bGcBmsSVKAjL9iriUx",
      url: "https://giphy.com/gifs/clash-bGcBmsSVKAjL9iriUx",
      slug: "clash-bGcBmsSVKAjL9iriUx",
      bitly_gif_url: "https://gph.is/g/Z5lJ7mQ",
      bitly_url: "https://gph.is/g/Z5lJ7mQ",
      embed_url: "https://giphy.com/embed/bGcBmsSVKAjL9iriUx",
      username: "clash",
      source: "",
      title: "Happy Birthday GIF by Clash",
      rating: "g",
      content_url: "",
      source_tld: "",
      source_post_url: "",
      is_sticker: 0,
      import_datetime: "2022-11-30 07:26:11",
      trending_datetime: "0000-00-00 00:00:00",
      images: {
        original: {
          height: "276",
          width: "480",
          size: "927901",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
          mp4_size: "182424",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.mp4&ct=g",
          webp_size: "303670",
          webp: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.webp&ct=g",
          frames: "95",
          hash: "3a1f1ae0df43b5399621dc5013d48cdd",
        },
        downsized: {
          height: "276",
          width: "480",
          size: "927901",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
        },
        downsized_large: {
          height: "276",
          width: "480",
          size: "927901",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
        },
        downsized_medium: {
          height: "276",
          width: "480",
          size: "927901",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.gif&ct=g",
        },
        downsized_small: {
          height: "248",
          width: "431",
          mp4_size: "64822",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy-downsized-small.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-downsized-small.mp4&ct=g",
        },
        downsized_still: {
          height: "276",
          width: "480",
          size: "927901",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy_s.gif&ct=g",
        },
        fixed_height: {
          height: "200",
          width: "348",
          size: "512228",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200.gif&ct=g",
          mp4_size: "90747",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200.mp4&ct=g",
          webp_size: "186062",
          webp: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200.webp&ct=g",
        },
        fixed_height_downsampled: {
          height: "200",
          width: "348",
          size: "62781",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200_d.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200_d.gif&ct=g",
          webp_size: "46540",
          webp: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200_d.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200_d.webp&ct=g",
        },
        fixed_height_small: {
          height: "100",
          width: "174",
          size: "215150",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100.gif&ct=g",
          mp4_size: "39707",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100.mp4&ct=g",
          webp_size: "81992",
          webp: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100.webp&ct=g",
        },
        fixed_height_small_still: {
          height: "100",
          width: "174",
          size: "6271",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100_s.gif&ct=g",
        },
        fixed_height_still: {
          height: "200",
          width: "348",
          size: "13954",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200_s.gif&ct=g",
        },
        fixed_width: {
          height: "115",
          width: "200",
          size: "233326",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200w.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w.gif&ct=g",
          mp4_size: "47806",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200w.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w.mp4&ct=g",
          webp_size: "95500",
          webp: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200w.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w.webp&ct=g",
        },
        fixed_width_downsampled: {
          height: "115",
          width: "200",
          size: "27592",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200w_d.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w_d.gif&ct=g",
          webp_size: "22904",
          webp: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200w_d.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w_d.webp&ct=g",
        },
        fixed_width_small: {
          height: "58",
          width: "100",
          size: "95740",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100w.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w.gif&ct=g",
          mp4_size: "23681",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100w.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w.mp4&ct=g",
          webp_size: "45490",
          webp: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100w.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w.webp&ct=g",
        },
        fixed_width_small_still: {
          height: "58",
          width: "100",
          size: "3560",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/100w_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=100w_s.gif&ct=g",
        },
        fixed_width_still: {
          height: "115",
          width: "200",
          size: "7947",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/200w_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=200w_s.gif&ct=g",
        },
        looping: {
          mp4_size: "970431",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy-loop.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-loop.mp4&ct=g",
        },
        original_still: {
          height: "276",
          width: "480",
          size: "42360",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy_s.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy_s.gif&ct=g",
        },
        original_mp4: {
          height: "276",
          width: "480",
          mp4_size: "182424",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy.mp4&ct=g",
        },
        preview: {
          height: "220",
          width: "382",
          mp4_size: "36762",
          mp4: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy-preview.mp4?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-preview.mp4&ct=g",
        },
        preview_gif: {
          height: "100",
          width: "174",
          size: "48857",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy-preview.gif?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-preview.gif&ct=g",
        },
        preview_webp: {
          height: "166",
          width: "288",
          size: "42922",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/giphy-preview.webp?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=giphy-preview.webp&ct=g",
        },
        "480w_still": {
          height: "276",
          width: "480",
          size: "927901",
          url: "https://media4.giphy.com/media/bGcBmsSVKAjL9iriUx/480w_s.jpg?cid=3adff11emqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m&rid=480w_s.jpg&ct=g",
        },
      },
      user: {
        avatar_url:
          "https://media2.giphy.com/avatars/clashroyale/FzjnAGierhe6.jpg",
        banner_image: "https://media2.giphy.com/headers/clash/eT6s4qOTl5Cv.gif",
        banner_url: "https://media2.giphy.com/headers/clash/eT6s4qOTl5Cv.gif",
        profile_url: "https://giphy.com/clash/",
        username: "clash",
        display_name: "Clash",
        description: "",
        instagram_url: "https://instagram.com/ClashofClans",
        website_url: "https://supercell.com/",
        is_verified: true,
      },
      analytics_response_payload:
        "e=Z2lmX2lkPWJHY0Jtc1NWS0FqTDlpcmlVeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc",
      analytics: {
        onload: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJHY0Jtc1NWS0FqTDlpcmlVeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc&action_type=SEEN",
        },
        onclick: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJHY0Jtc1NWS0FqTDlpcmlVeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc&action_type=CLICK",
        },
        onsent: {
          url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJHY0Jtc1NWS0FqTDlpcmlVeCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9M2FkZmYxMWVtcXNnbTBqNHNxNXJ2bjN6OWg3cTJwa2Zkbm1razh6Mm04aWp5YzhtJmN0PWc&action_type=SENT",
        },
      },
    },
  ],
  pagination: {
    total_count: 2534,
    count: 50,
    offset: 0,
  },
  meta: {
    status: 200,
    msg: "OK",
    response_id: "mqsgm0j4sq5rvn3z9h7q2pkfdnmkk8z2m8ijyc8m",
  },
};
