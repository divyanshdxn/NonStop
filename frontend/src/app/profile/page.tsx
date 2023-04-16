export default function Profile(googleCredentials:any) {
  const {name, username, mail, imageUrl, FacebookUrl, InstagramUrl, TwitterUrl, LinkedInUrl } =  googleCredentials //TODO: get all data from people.
  return (
    <>
      <html>
        <body
          style={{
            justifyContent: "center",
            margin: "0px",
            padding: "0px",
            cursor: "auto",
            outlineColor: "rgb(136, 186, 229)",
            color: "rgb(136, 186, 229)",
            outline: "rgb(136, 186, 229) none 0px",
            display: "flex",
            minHeight: "970px",
            flexDirection: "column",
            overflow: "visible",
            counterReset: "section 0",
            fontSize: "15px",
            overflowWrap: "break-word",
            fontFamily: "Inter, sans-serif",
            boxSizing: "border-box",
            borderColor: "rgb(115, 107, 94)",
            backgroundColor: "rgb(24, 26, 27)",
          }}
          ng-version="13.0.3"
        >
          <div
            style={{
              outlineColor: "rgb(136, 186, 229)",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <main
              style={{
                outlineColor: "rgb(136, 186, 229)",
                clear: "both",
                flex: "1 0 auto",
                minHeight: "873px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  outlineColor: "rgb(136, 186, 229)",
                  boxSizing: "border-box",
                }}
              >
                <section
                  style={{
                    padding: "15px 15px 70px",
                    outlineColor: "rgb(136, 186, 229)",
                    outline: "rgb(136, 186, 229) none 0px",
                    boxSizing: "border-box",
                    backgroundImage: "none",
                    backgroundColor: "rgb(28, 30, 31)",
                    background:
                      "rgb(28, 30, 31) none repeat scroll 0% 0% / auto padding-box border-box",
                    minHeight: "917px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      outlineColor: "rgb(136, 186, 229)",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        outlineColor: "rgb(136, 186, 229)",
                        boxSizing: "border-box",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "calc(100% - 320px)",
                          outlineColor: "rgb(136, 186, 229)",
                          outline: "rgb(136, 186, 229) none 0px",
                          boxSizing: "border-box",
                          maxHeight: "100%",
                          overflow: "hidden auto",
                          borderRadius: "8px",
                        }}
                      >
                        <div
                          style={{
                            outlineColor: "rgb(136, 186, 229)",
                            boxSizing: "border-box",
                          }}
                        >
                          <div
                            style={{
                              outlineColor: "rgb(136, 186, 229)",
                              position: "relative",
                              boxSizing: "border-box",
                              backgroundImage: "none",
                              backgroundColor: "rgb(24, 26, 27)",
                              padding: "10px",
                              background:
                                "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                              borderRadius: "8px",
                              minHeight: "180px",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderColor: "rgb(48, 52, 54)",
                                width: "90px",
                                height: "90px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                position: "relative",
                                border: "4px solid rgb(48, 52, 54)",
                                filter:
                                  "drop-shadow(rgba(77, 121, 174, 0.23) 0px 3.77px 3.54023px)",
                              }}
                            >
                              <img
                                loading="lazy"
                                src={imageUrl}
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  boxSizing: "border-box",
                                  maxWidth: "80px",
                                  maxHeight: "80px",
                                  borderRadius: "50%",
                                }}
                              />

                              <div
                                style={{
                                  outlineColor: "rgb(232, 230, 227)",
                                  boxSizing: "border-box",
                                  backgroundImage: "none",
                                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                                  color: "rgb(232, 230, 227)",
                                  position: "absolute",
                                  top: "0px",
                                  width: "100%",
                                  height: "82px",
                                  background:
                                    "rgba(0, 0, 0, 0.4) none repeat scroll 0% 0% / auto padding-box border-box",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  margin: "auto",
                                  fontSize: "16px",
                                  transition: "all 0.3s ease 0s",
                                  opacity: 0,
                                  visibility: "hidden",
                                  fontWeight: 500,
                                  cursor: "pointer",
                                }}
                              >
                                <em
                                  style={{
                                    outlineColor: "rgb(232, 230, 227)",
                                    fontStyle: "normal",
                                    boxSizing: "border-box",
                                    fontWeight: 400,
                                    fontSize: "24px",
                                    lineHeight: "24px",
                                    letterSpacing: "normal",
                                    textTransform: "none",
                                    display: "block",
                                    whiteSpace: "nowrap",
                                    overflowWrap: "normal",
                                    direction: "ltr",
                                    textRendering: "optimizeLegibility",
                                    WebkitFontSmoothing: "antialiased",
                                    fontFeatureSettings: '"liga"',
                                    fontVariationSettings: '"FILL" 1',
                                    fontFamily: '"Material Icons"',
                                  }}
                                >
                                  add
                                </em>
                              </div>
                            </div>
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                              }}
                            >
                              <div
                                style={{
                                  outlineColor: "rgb(143, 169, 192)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                  color: "rgb(143, 169, 192)",
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                  marginTop: "10px",
                                }}
                              >
                                <div
                                  style={{
                                    outlineColor: "rgb(143, 169, 192)",
                                    boxSizing: "border-box",
                                    marginBottom: "0px",
                                    marginLeft: "30px",
                                    position: "relative",
                                  }}
                                >
                                  @+{username} {/*TODO: Change Here*/}
                                </div>
                              </div>
                              <h2
                                style={{
                                  color: "rgb(136, 186, 229)",
                                  outlineColor: "rgb(136, 186, 229)",
                                  fontWeight: 600,
                                  marginTop: "10px",
                                  marginBottom: "10px",
                                  outline: "rgb(136, 186, 229) none 0px",
                                  boxSizing: "border-box",
                                  fontSize: "24px",
                                  lineHeight: "29px",
                                }}
                              >
                                {name}
                              </h2>
                              <p
                                style={{
                                  color: "rgb(131, 169, 203)",
                                  outlineColor: "rgb(131, 169, 203)",
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                  marginTop: "0px",
                                  marginBottom: "4px",
                                  fontWeight: 500,
                                  outline: "rgb(131, 169, 203) none 0px",
                                  boxSizing: "border-box",
                                }}
                              >
                                International Institute of Information
                                Technology (IIIT), Naya Raipur
                              </p>

                              <p
                                style={{
                                  color: "rgb(131, 169, 203)",
                                  outlineColor: "rgb(131, 169, 203)",
                                  fontSize: "12px",
                                  lineHeight: "15px",
                                  marginTop: "0px",
                                  marginBottom: "15px",
                                  fontWeight: 500,
                                  outline: "rgb(131, 169, 203) none 0px",
                                  boxSizing: "border-box",
                                }}
                              >
                                {mail}
                              </p>

                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  display: "flex",
                                  marginBottom: "0px",
                                  boxSizing: "border-box",
                                  minHeight: "0px",
                                  margin: "15px 0px 0px",
                                }}
                              >
                                <div
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <a
                                    target="_blank"
                                    href={FacebookUrl}
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      color: "rgb(66, 170, 255)",
                                      textDecorationColor: "rgb(66, 170, 255)",
                                      WebkitTapHighlightColor:
                                        "rgba(0, 0, 0, 0)",
                                      textDecoration:
                                        "none solid rgb(66, 170, 255)",
                                      display: "inline-block",
                                      transition: "all 0.3s ease 0s",
                                      cursor: "pointer",
                                      boxSizing: "border-box",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      src="https://d8it4huxumps7.cloudfront.net/uploads/images/64140a2e79b72_frame_1000004749fb_circle.svg"
                                      alt="facebook"
                                      height="40"
                                      width="40"
                                      loading="lazy"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        cursor: "pointer",
                                        opacity: 1,
                                        filter: "grayscale(0)",
                                        width: "30px",
                                        height: "30px",
                                        marginRight: "15px",
                                      }}
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    href={TwitterUrl}
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      color: "rgb(66, 170, 255)",
                                      textDecorationColor: "rgb(66, 170, 255)",
                                      WebkitTapHighlightColor:
                                        "rgba(0, 0, 0, 0)",
                                      textDecoration:
                                        "none solid rgb(66, 170, 255)",
                                      display: "inline-block",
                                      transition: "all 0.3s ease 0s",
                                      cursor: "pointer",
                                      boxSizing: "border-box",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      src="https://d8it4huxumps7.cloudfront.net/uploads/images/641408e06df55_twitter_circle.svg"
                                      alt="twitter"
                                      height="40"
                                      width="40"
                                      loading="lazy"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        cursor: "pointer",
                                        opacity: 1,
                                        filter: "grayscale(0)",
                                        width: "30px",
                                        height: "30px",
                                        marginRight: "15px",
                                      }}
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    href={InstagramUrl}
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      color: "rgb(66, 170, 255)",
                                      textDecorationColor: "rgb(66, 170, 255)",
                                      WebkitTapHighlightColor:
                                        "rgba(0, 0, 0, 0)",
                                      textDecoration:
                                        "none solid rgb(66, 170, 255)",
                                      display: "inline-block",
                                      transition: "all 0.3s ease 0s",
                                      cursor: "pointer",
                                      boxSizing: "border-box",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      src="https://d8it4huxumps7.cloudfront.net/uploads/images/64140a198ff9e_ig_circle.svg"
                                      alt="instagram"
                                      height="40"
                                      width="40"
                                      loading="lazy"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        cursor: "pointer",
                                        opacity: 1,
                                        filter: "grayscale(0)",
                                        width: "30px",
                                        height: "30px",
                                        marginRight: "15px",
                                      }}
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    href={LinkedInUrl}
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      color: "rgb(66, 170, 255)",
                                      textDecorationColor: "rgb(66, 170, 255)",
                                      WebkitTapHighlightColor:
                                        "rgba(0, 0, 0, 0)",
                                      textDecoration:
                                        "none solid rgb(66, 170, 255)",
                                      display: "inline-block",
                                      transition: "all 0.3s ease 0s",
                                      cursor: "pointer",
                                      boxSizing: "border-box",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      src="https://d8it4huxumps7.cloudfront.net/uploads/images/64140a0b653ed_fb_circle.svg"
                                      alt="linkedin"
                                      height="40"
                                      width="40"
                                      loading="lazy"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        cursor: "pointer",
                                        opacity: 1,
                                        filter: "grayscale(0)",
                                        width: "30px",
                                        height: "30px",
                                        marginRight: "15px",
                                      }}
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    href=""
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      color: "rgb(66, 170, 255)",
                                      textDecorationColor: "rgb(66, 170, 255)",
                                      WebkitTapHighlightColor:
                                        "rgba(0, 0, 0, 0)",
                                      textDecoration:
                                        "none solid rgb(66, 170, 255)",
                                      display: "inline-block",
                                      transition: "all 0.3s ease 0s",
                                      cursor: "pointer",
                                      boxSizing: "border-box",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      src="https://d8it4huxumps7.cloudfront.net/uploads/images/menu/github_icon.svg"
                                      alt="github"
                                      height="40"
                                      width="40"
                                      loading="lazy"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        width: "30px",
                                        height: "30px",
                                        marginRight: "15px",
                                        opacity: "0.5",
                                        filter: "grayscale(1)",
                                      }}
                                    />
                                    <p
                                      style={{
                                        color: "rgb(131, 169, 203)",
                                        outlineColor: "rgb(131, 169, 203)",
                                        marginBottom: "auto",
                                        fontSize: "12px",
                                        lineHeight: "19px",
                                        marginTop: "auto",
                                        fontWeight: 600,
                                        outline: "rgb(131, 169, 203) none 0px",
                                        boxSizing: "border-box",
                                        backgroundImage: "none",
                                        backgroundColor: "rgb(24, 26, 27)",
                                        boxShadow:
                                          "rgba(50, 54, 56, 0.13) 0.854749px 0.854749px 10.257px 0px",
                                        borderColor: "rgb(131, 169, 203)",
                                        position: "absolute",
                                        left: "-38px",
                                        right: "0px",
                                        margin: "auto",
                                        display: "none",
                                        width: "100px",
                                        top: "-40px",
                                        background:
                                          "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                        border: "1px solid rgb(131, 169, 203)",
                                        padding: "5px",
                                        borderRadius: "8px",
                                        textAlign: "center",
                                        zIndex: 9,
                                      }}
                                    >
                                      Not Yet Added
                                    </p>
                                  </a>
                                </div>
                              </div>

                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  display: "flex",
                                  alignItems: "center",
                                  marginTop: "10px",
                                  boxSizing: "border-box",
                                }}
                              >
                                <button
                                  style={{
                                    outlineColor: "rgb(232, 230, 227)",
                                    borderColor: "rgb(0, 93, 186)",
                                    backgroundImage: "none",
                                    backgroundColor: "rgb(0, 92, 184)",
                                    fontFamily: "Inter, sans-serif",
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                    border: "1px solid rgb(0, 93, 186)",
                                    boxSizing: "border-box",
                                    color: "rgb(232, 230, 227)",
                                    borderRadius: "40px",
                                    transition: "all 0.4s ease 0s",
                                    height: "35px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "50%",
                                  }}
                                >
                                  <em
                                    style={{
                                      outlineColor: "rgb(232, 230, 227)",
                                      marginRight: "10px",
                                      fontStyle: "normal",
                                      boxSizing: "border-box",
                                      fontWeight: 400,
                                      fontSize: "18px",
                                      lineHeight: "18px",
                                      letterSpacing: "normal",
                                      textTransform: "none",
                                      display: "block",
                                      whiteSpace: "nowrap",
                                      overflowWrap: "normal",
                                      direction: "ltr",
                                      textRendering: "optimizeLegibility",
                                      WebkitFontSmoothing: "antialiased",
                                      fontFeatureSettings: '"liga"',
                                      fontVariationSettings: '"FILL" 1',
                                      fontFamily: '"Material Icons"',
                                    }}
                                  >
                                    share
                                  </em>
                                  Share Profile
                                </button>
                                <button
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    borderColor: "rgb(37, 97, 171)",
                                    backgroundImage: "none",
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    marginLeft: "10px",
                                    fontFamily: "Inter, sans-serif",
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                    border: "1px solid rgb(37, 97, 171)",
                                    boxSizing: "border-box",
                                    color: "rgb(136, 186, 229)",
                                    borderRadius: "40px",
                                    transition: "all 0.4s ease 0s",
                                    height: "35px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "50%",
                                  }}
                                >
                                  <em
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      marginRight: "10px",
                                      fontStyle: "normal",
                                      boxSizing: "border-box",
                                      display: "block",
                                      fontSize: "18px",
                                      fontFeatureSettings: '"liga"',
                                      textTransform: "none",
                                      fontFamily: '"Material Icons"',
                                    }}
                                  ></em>
                                  Edit Profile
                                </button>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "none",
                              outlineColor: "rgb(136, 186, 229)",
                              outline: "rgb(136, 186, 229) none 0px",
                              boxSizing: "border-box",
                              backgroundImage: "none",
                              backgroundColor: "rgb(24, 26, 27)",
                              padding: "10px",
                              background:
                                "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                              borderRadius: "8px",
                              minHeight: "180px",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderBottomColor: "rgb(136, 186, 229)",
                                backgroundImage: "none",
                                backgroundColor: "rgb(24, 26, 27)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: "0px none rgb(136, 186, 229)",
                                marginBottom: "15px",
                                paddingBottom: "10px",
                                width: "100%",
                                background:
                                  "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                color: "rgb(136, 186, 229)",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "17px",
                              }}
                            >
                              <span
                                style={{
                                  outlineColor: "rgb(131, 169, 203)",
                                  boxSizing: "border-box",
                                  color: "rgb(131, 169, 203)",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                  lineHeight: "18px",
                                  textTransform: "capitalize",
                                  margin: "0px 10px 0px 0px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginBottom: "0px",
                                  marginRight: "10px",
                                }}
                              >
                                Skills
                              </span>
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    boxSizing: "border-box",
                                    color: "rgb(66, 170, 255)",
                                    fontWeight: 600,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                    margin: "0px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0px",
                                  }}
                                >
                                  <em
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      fontStyle: "normal",
                                      boxSizing: "border-box",
                                      fontWeight: 600,
                                      fontSize: "18px",
                                      lineHeight: "18px",
                                      letterSpacing: "normal",
                                      textTransform: "none",
                                      display: "block",
                                      whiteSpace: "nowrap",
                                      overflowWrap: "normal",
                                      direction: "ltr",
                                      textRendering: "optimizeLegibility",
                                      WebkitFontSmoothing: "antialiased",
                                      fontFeatureSettings: '"liga"',
                                      fontVariationSettings: '"FILL" 1',
                                      fontFamily: '"Material Icons"',
                                      marginRight: "0px",
                                      color: "rgb(136, 186, 229)",
                                      transition: "all 0.3s ease 0s",
                                    }}
                                  >
                                    add
                                  </em>
                                </span>
                              </div>
                            </div>

                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderColor: "rgba(56, 60, 63, 0.3)",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid rgba(56, 60, 63, 0.3)",
                                borderRadius: "10px",
                                padding: "10px",
                              }}
                            >
                              <img
                                alt="Empty box"
                                height="150"
                                width="150"
                                loading="lazy"
                                src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c784a2ab1de_sk.svg"
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  boxSizing: "border-box",
                                  backgroundColor: "rgb(26, 28, 30)",
                                  borderRadius: "50%",
                                  width: "90px",
                                  height: "90px",
                                  display: "block",
                                  margin: "auto",
                                  filter: "grayscale(1)",
                                }}
                              />
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  paddingLeft: "15px",
                                  boxSizing: "border-box",
                                  width: "100%",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgba(136, 186, 229, 0.8)",
                                    boxSizing: "border-box",
                                    color: "rgba(136, 186, 229, 0.8)",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    textAlign: "center",
                                    display: "block",
                                    margin: "0px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0px",
                                  }}
                                >
                                  Add your skills here!
                                </span>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "none",
                              outlineColor: "rgb(136, 186, 229)",
                              outline: "rgb(136, 186, 229) none 0px",
                              boxSizing: "border-box",
                              backgroundImage: "none",
                              backgroundColor: "rgb(24, 26, 27)",
                              padding: "10px",
                              background:
                                "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                              borderRadius: "8px",
                              minHeight: "180px",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderBottomColor: "rgb(136, 186, 229)",
                                backgroundImage: "none",
                                backgroundColor: "rgb(24, 26, 27)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: "0px none rgb(136, 186, 229)",
                                marginBottom: "15px",
                                paddingBottom: "10px",
                                width: "100%",
                                background:
                                  "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                color: "rgb(136, 186, 229)",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "17px",
                              }}
                            >
                              <span
                                style={{
                                  outlineColor: "rgb(131, 169, 203)",
                                  boxSizing: "border-box",
                                  color: "rgb(131, 169, 203)",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                  lineHeight: "18px",
                                  textTransform: "capitalize",
                                  margin: "0px 10px 0px 0px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginBottom: "0px",
                                  marginRight: "10px",
                                }}
                              >
                                Education
                              </span>
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    boxSizing: "border-box",
                                    color: "rgb(66, 170, 255)",
                                    fontWeight: 600,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                    margin: "0px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0px",
                                  }}
                                >
                                  <em
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      fontStyle: "normal",
                                      boxSizing: "border-box",
                                      fontWeight: 600,
                                      fontSize: "18px",
                                      lineHeight: "18px",
                                      letterSpacing: "normal",
                                      textTransform: "none",
                                      display: "block",
                                      whiteSpace: "nowrap",
                                      overflowWrap: "normal",
                                      direction: "ltr",
                                      textRendering: "optimizeLegibility",
                                      WebkitFontSmoothing: "antialiased",
                                      fontFeatureSettings: '"liga"',
                                      fontVariationSettings: '"FILL" 1',
                                      fontFamily: '"Material Icons"',
                                      marginRight: "0px",
                                      color: "rgb(136, 186, 229)",
                                      transition: "all 0.3s ease 0s",
                                    }}
                                  >
                                    add
                                  </em>
                                </span>
                              </div>
                            </div>

                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderColor: "rgba(56, 60, 63, 0.3)",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid rgba(56, 60, 63, 0.3)",
                                borderRadius: "10px",
                                padding: "10px",
                              }}
                            >
                              <img
                                alt="Empty box"
                                height="150"
                                width="150"
                                loading="lazy"
                                src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c7772636404_office_bag.png"
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  boxSizing: "border-box",
                                  backgroundColor: "rgb(26, 28, 30)",
                                  borderRadius: "50%",
                                  width: "90px",
                                  height: "90px",
                                  display: "block",
                                  margin: "auto",
                                  filter: "grayscale(1)",
                                }}
                              />
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  paddingLeft: "15px",
                                  boxSizing: "border-box",
                                  width: "100%",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgba(136, 186, 229, 0.8)",
                                    boxSizing: "border-box",
                                    color: "rgba(136, 186, 229, 0.8)",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    textAlign: "center",
                                    display: "block",
                                    margin: "0px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0px",
                                  }}
                                >
                                  Add your education details here!
                                </span>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "none",
                              outlineColor: "rgb(136, 186, 229)",
                              outline: "rgb(136, 186, 229) none 0px",
                              boxSizing: "border-box",
                              backgroundImage: "none",
                              backgroundColor: "rgb(24, 26, 27)",
                              padding: "10px",
                              background:
                                "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                              borderRadius: "8px",
                              minHeight: "180px",
                              marginBottom: "10px",
                            }}
                          >
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderBottomColor: "rgb(136, 186, 229)",
                                backgroundImage: "none",
                                backgroundColor: "rgb(24, 26, 27)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: "0px none rgb(136, 186, 229)",
                                marginBottom: "15px",
                                paddingBottom: "10px",
                                width: "100%",
                                background:
                                  "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                color: "rgb(136, 186, 229)",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "17px",
                              }}
                            >
                              <span
                                style={{
                                  outlineColor: "rgb(131, 169, 203)",
                                  boxSizing: "border-box",
                                  color: "rgb(131, 169, 203)",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                  lineHeight: "18px",
                                  textTransform: "capitalize",
                                  margin: "0px 10px 0px 0px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginBottom: "0px",
                                  marginRight: "10px",
                                }}
                              >
                                Work Experience
                              </span>
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    boxSizing: "border-box",
                                    color: "rgb(66, 170, 255)",
                                    fontWeight: 600,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                    margin: "0px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0px",
                                  }}
                                >
                                  <em
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      fontStyle: "normal",
                                      boxSizing: "border-box",
                                      fontWeight: 600,
                                      fontSize: "18px",
                                      lineHeight: "18px",
                                      letterSpacing: "normal",
                                      textTransform: "none",
                                      display: "block",
                                      whiteSpace: "nowrap",
                                      overflowWrap: "normal",
                                      direction: "ltr",
                                      textRendering: "optimizeLegibility",
                                      WebkitFontSmoothing: "antialiased",
                                      fontFeatureSettings: '"liga"',
                                      fontVariationSettings: '"FILL" 1',
                                      fontFamily: '"Material Icons"',
                                      marginRight: "0px",
                                      color: "rgb(136, 186, 229)",
                                      transition: "all 0.3s ease 0s",
                                    }}
                                  >
                                    add
                                  </em>
                                </span>
                              </div>
                            </div>

                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderColor: "rgba(56, 60, 63, 0.3)",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid rgba(56, 60, 63, 0.3)",
                                borderRadius: "10px",
                                padding: "10px",
                              }}
                            >
                              <img
                                alt="Empty box"
                                height="150"
                                width="150"
                                loading="lazy"
                                src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c77cbb6c396_ed.svg"
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  boxSizing: "border-box",
                                  backgroundColor: "rgb(26, 28, 30)",
                                  borderRadius: "50%",
                                  width: "90px",
                                  height: "90px",
                                  display: "block",
                                  margin: "auto",
                                  filter: "grayscale(1)",
                                }}
                              />
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  paddingLeft: "15px",
                                  boxSizing: "border-box",
                                  width: "100%",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgba(136, 186, 229, 0.8)",
                                    boxSizing: "border-box",
                                    color: "rgba(136, 186, 229, 0.8)",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    textAlign: "center",
                                    display: "block",
                                    margin: "0px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0px",
                                  }}
                                >
                                  Add your work experience here!
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "calc(100% - 320px)",
                          outlineColor: "rgb(136, 186, 229)",
                          maxWidth: "100%",
                          outline: "rgb(136, 186, 229) none 0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            outlineColor: "rgb(136, 186, 229)",
                            boxSizing: "border-box",
                          }}
                        >
                          <div
                            style={{
                              outlineColor: "rgb(136, 186, 229)",
                              justifyContent: "space-between",
                              alignItems: "center",
                              display: "flex",
                              marginBottom: "10px",
                              boxSizing: "border-box",
                            }}
                          >
                            <div
                              style={{
                                padding: "10px",
                                outlineColor: "rgb(136, 186, 229)",
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: "flex",
                                outline: "rgb(136, 186, 229) none 0px",
                                boxSizing: "border-box",
                                backgroundImage: "none",
                                backgroundColor: "rgb(24, 26, 27)",
                                background:
                                  "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                borderRadius: "8px",
                                width: "calc(40% - 5px)",
                              }}
                            >
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                }}
                              >
                                <img
                                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/6411717e24426_points_new.svg"
                                  alt="points icon"
                                  loading="lazy"
                                  style={{
                                    width: "25px",
                                    marginRight: "5px",
                                    outlineColor: "rgb(136, 186, 229)",
                                    outline: "rgb(136, 186, 229) none 0px",
                                    boxSizing: "border-box",
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    outlineColor: "rgb(136, 186, 229)",
                                    outline: "rgb(136, 186, 229) none 0px",
                                    boxSizing: "border-box",
                                    color: "rgb(136, 186, 229)",
                                    lineHeight: "17px",
                                  }}
                                >
                                  Points
                                </span>
                              </div>
                              <span
                                style={{
                                  fontSize: "13px",
                                  fontWeight: 600,
                                  outlineColor: "rgb(136, 186, 229)",
                                  outline: "rgb(136, 186, 229) none 0px",
                                  boxSizing: "border-box",
                                  color: "rgb(136, 186, 229)",
                                  lineHeight: "17px",
                                }}
                              >
                                0
                              </span>
                            </div>
                            <div
                              style={{
                                padding: "10px",
                                outlineColor: "rgb(136, 186, 229)",
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: "flex",
                                outline: "rgb(136, 186, 229) none 0px",
                                boxSizing: "border-box",
                                backgroundImage: "none",
                                backgroundColor: "rgb(24, 26, 27)",
                                background:
                                  "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                borderRadius: "8px",
                                width: "calc(60% - 5px)",
                              }}
                            >
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                }}
                              >
                                <img
                                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/641172bc14271_coins_new.svg"
                                  alt="coins icon"
                                  loading="lazy"
                                  style={{
                                    width: "25px",
                                    marginRight: "5px",
                                    outlineColor: "rgb(136, 186, 229)",
                                    outline: "rgb(136, 186, 229) none 0px",
                                    boxSizing: "border-box",
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    outlineColor: "rgb(136, 186, 229)",
                                    outline: "rgb(136, 186, 229) none 0px",
                                    boxSizing: "border-box",
                                    color: "rgb(136, 186, 229)",
                                    lineHeight: "17px",
                                  }}
                                >
                                  Coins
                                </span>
                              </div>
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  display: "flex",
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    outlineColor: "rgb(136, 186, 229)",
                                    outline: "rgb(136, 186, 229) none 0px",
                                    boxSizing: "border-box",
                                    color: "rgb(136, 186, 229)",
                                    lineHeight: "17px",
                                  }}
                                >
                                  675
                                </span>
                                <div
                                  tabIndex={0}
                                  style={{
                                    padding: "5px 10px",
                                    outlineColor: "rgb(66, 170, 255)",
                                    cursor: "pointer",
                                    outline: "rgb(66, 170, 255) none 0px",
                                    boxSizing: "border-box",
                                    backgroundColor: "rgb(28, 30, 31)",
                                    color: "rgb(66, 170, 255)",
                                    borderRadius: "40px",
                                    marginLeft: "10px",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    position: "relative",
                                    zIndex: 9999,
                                  }}
                                >
                                  Redeem
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              outlineColor: "rgb(136, 186, 229)",
                              marginBottom: "10px",
                              boxSizing: "border-box",
                              backgroundImage: "none",
                              backgroundColor: "rgb(24, 26, 27)",
                              padding: "20px 10px",
                              background:
                                "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                              borderRadius: "8px",
                              maxHeight: "100%",
                              overflow: "hidden auto",
                            }}
                          >
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                                borderBottomColor: "rgb(136, 186, 229)",
                                backgroundImage: "none",
                                backgroundColor: "rgb(24, 26, 27)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: "0px none rgb(136, 186, 229)",
                                marginBottom: "15px",
                                paddingBottom: "10px",
                                width: "100%",
                                background:
                                  "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                color: "rgb(136, 186, 229)",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "17px",
                              }}
                            >
                              <span
                                style={{
                                  outlineColor: "rgb(131, 169, 203)",
                                  boxSizing: "border-box",
                                  color: "rgb(131, 169, 203)",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                  lineHeight: "18px",
                                  textTransform: "capitalize",
                                  margin: "0px",
                                }}
                              >
                                Rank
                              </span>
                            </div>
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                display: "flex",
                                flexWrap: "wrap",
                                boxSizing: "border-box",
                              }}
                            >
                              <div
                                tabIndex={0}
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  cursor: "pointer",
                                  boxSizing: "border-box",
                                  backgroundColor: "rgb(25, 44, 13)",
                                  width: "calc(33.333% - 10px)",
                                  padding: "10px",
                                  borderRadius: "12px",
                                  margin: "10px 5px",
                                }}
                              >
                                <div
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    display: "flex",
                                    marginBottom: "10px",
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <img
                                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/641181e13d12c_global_rank.svg"
                                    alt="global icon"
                                    loading="lazy"
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      boxSizing: "border-box",
                                    }}
                                  />
                                  <div
                                    style={{
                                      outlineColor: "rgb(87, 254, 191)",
                                      display: "flex",
                                      alignItems: "center",
                                      boxSizing: "border-box",
                                      color: "rgb(87, 254, 191)",
                                      backgroundColor: "rgb(24, 26, 27)",
                                      fontWeight: 700,
                                      fontSize: "10px",
                                      lineHeight: "12px",
                                      padding: "5px 10px",
                                      borderRadius: "12px 0px 0px 12px",
                                      marginRight: "-10px",
                                    }}
                                  ></div>
                                </div>
                                <span
                                  style={{
                                    outlineColor: "rgba(136, 186, 229, 0.8)",
                                    marginBottom: "5px",
                                    boxSizing: "border-box",
                                    color: "rgba(136, 186, 229, 0.8)",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                  }}
                                >
                                  Global
                                </span>
                                <span
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    boxSizing: "border-box",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    lineHeight: "17px",
                                    letterSpacing: "-0.28px",
                                    display: "block",
                                  }}
                                >
                                  # N/A
                                </span>
                              </div>

                              <div
                                tabIndex={0}
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  cursor: "pointer",
                                  boxSizing: "border-box",
                                  backgroundImage: "none",
                                  backgroundColor: "rgba(47, 44, 0, 0.8)",
                                  background:
                                    "rgba(47, 44, 0, 0.8) none repeat scroll 0% 0% / auto padding-box border-box",
                                  width: "calc(33.333% - 10px)",
                                  padding: "10px",
                                  borderRadius: "12px",
                                  margin: "10px 5px",
                                }}
                              >
                                <div
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    display: "flex",
                                    marginBottom: "10px",
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <img
                                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/641185634d3d4_domain_rank.svg"
                                    alt="domain icon"
                                    loading="lazy"
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      boxSizing: "border-box",
                                    }}
                                  />
                                </div>
                                <span
                                  style={{
                                    outlineColor: "rgba(136, 186, 229, 0.8)",
                                    marginBottom: "5px",
                                    boxSizing: "border-box",
                                    color: "rgba(136, 186, 229, 0.8)",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                  }}
                                >
                                  Regional
                                </span>
                                <span
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    boxSizing: "border-box",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    lineHeight: "17px",
                                    letterSpacing: "-0.28px",
                                    display: "block",
                                  }}
                                >
                                  # N/A
                                </span>
                              </div>

                              <div
                                tabIndex={0}
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  cursor: "pointer",
                                  boxSizing: "border-box",
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  width: "calc(33.333% - 10px)",
                                  padding: "10px",
                                  borderRadius: "12px",
                                  margin: "10px 5px",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgba(136, 186, 229, 0.8)",
                                    marginBottom: "5px",
                                    boxSizing: "border-box",
                                    color: "rgba(136, 186, 229, 0.8)",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    marginTop: "10px",
                                    lineHeight: "15px",
                                  }}
                                >
                                  View
                                </span>
                                <span
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    boxSizing: "border-box",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    lineHeight: "17px",
                                    letterSpacing: "-0.28px",
                                    display: "block",
                                  }}
                                >
                                  Leaderboard
                                </span>
                                <div
                                  style={{
                                    outlineColor: "rgb(136, 186, 229)",
                                    boxSizing: "border-box",
                                    backgroundColor: "rgb(22, 58, 102)",
                                    width: "50%",
                                    height: "2px",
                                    display: "block",
                                    position: "relative",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              outlineColor: "rgb(136, 186, 229)",
                              marginBottom: "10px",
                              boxSizing: "border-box",
                              backgroundImage: "none",
                              backgroundColor: "rgb(24, 26, 27)",
                              padding: "10px 15px",
                              background:
                                "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                              borderRadius: "8px",
                            }}
                          >
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                              }}
                            >
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  boxSizing: "border-box",
                                  borderBottomColor: "rgb(136, 186, 229)",
                                  backgroundImage: "none",
                                  backgroundColor: "rgb(24, 26, 27)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  borderBottom: "0px none rgb(136, 186, 229)",
                                  marginBottom: "15px",
                                  paddingBottom: "10px",
                                  width: "100%",
                                  background:
                                    "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                  color: "rgb(136, 186, 229)",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgb(131, 169, 203)",
                                    boxSizing: "border-box",
                                    color: "rgb(131, 169, 203)",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    lineHeight: "18px",
                                    textTransform: "capitalize",
                                    margin: "0px 10px 0px 0px",
                                    marginRight: "10px",
                                  }}
                                >
                                  Badges
                                </span>
                                <div
                                  tabIndex={0}
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    boxSizing: "border-box",
                                    color: "rgb(66, 170, 255)",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                    fontWeight: 600,
                                    letterSpacing: "normal",
                                  }}
                                >
                                  View
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              outlineColor: "rgb(136, 186, 229)",
                              marginBottom: "10px",
                              boxSizing: "border-box",
                              backgroundImage: "none",
                              backgroundColor: "rgb(24, 26, 27)",
                              padding: "10px 15px",
                              background:
                                "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                              borderRadius: "8px",
                              maxHeight: "100%",
                              overflow: "hidden auto",
                            }}
                          >
                            <div
                              style={{
                                outlineColor: "rgb(136, 186, 229)",
                                boxSizing: "border-box",
                              }}
                            >
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  boxSizing: "border-box",
                                  borderBottomColor: "rgb(136, 186, 229)",
                                  backgroundImage: "none",
                                  backgroundColor: "rgb(24, 26, 27)",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  borderBottom: "0px none rgb(136, 186, 229)",
                                  marginBottom: "15px",
                                  paddingBottom: "10px",
                                  width: "100%",
                                  background:
                                    "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                  color: "rgb(136, 186, 229)",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                }}
                              >
                                <span
                                  style={{
                                    outlineColor: "rgb(131, 169, 203)",
                                    boxSizing: "border-box",
                                    color: "rgb(131, 169, 203)",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    lineHeight: "18px",
                                    textTransform: "capitalize",
                                    margin: "0px 10px 0px 0px",
                                    marginRight: "10px",
                                  }}
                                >
                                  Certificates
                                </span>
                                <div
                                  tabIndex={0}
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    boxSizing: "border-box",
                                    color: "rgb(66, 170, 255)",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                    fontWeight: 600,
                                    letterSpacing: "normal",
                                  }}
                                >
                                  View
                                </div>
                              </div>
                              <div
                                style={{
                                  outlineColor: "rgb(136, 186, 229)",
                                  boxSizing: "border-box",
                                  maxHeight: "100%",
                                  overflow: "hidden auto",
                                  borderRadius: "8px",
                                }}
                              >
                                <a
                                  target="_blank"
                                  href="/certificate-preview/745383ca-b9db-45e3-b26e-c799df7dd4df"
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    color: "rgb(66, 170, 255)",
                                    textDecorationColor: "rgb(66, 170, 255)",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration:
                                      "none solid rgb(66, 170, 255)",
                                    transition: "all 0.3s ease 0s",
                                    cursor: "pointer",
                                    boxSizing: "border-box",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <div
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      boxSizing: "border-box",
                                      backgroundImage: "none",
                                      backgroundColor: "rgb(24, 26, 27)",
                                      borderColor: "rgb(56, 60, 63)",
                                      background:
                                        "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                      width: "55px",
                                      height: "55px",
                                      minWidth: "55px",
                                      minHeight: "55px",
                                      border: "1px solid rgb(56, 60, 63)",
                                      position: "relative",
                                      marginRight: "15px",
                                    }}
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5e69eaee8a0a1_Flipkart_logo.png"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        width: "calc(100% - 10px)",
                                        height: "auto",
                                        margin: "auto",
                                        position: "absolute",
                                        inset: "0px",
                                      }}
                                    />
                                  </div>
                                  <div
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      boxSizing: "border-box",
                                      color: "rgb(136, 186, 229)",
                                    }}
                                  >
                                    <h4
                                      style={{
                                        color: "rgb(136, 186, 229)",
                                        outlineColor: "rgb(136, 186, 229)",
                                        fontWeight: 600,
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        outline: "rgb(136, 186, 229) none 0px",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        lineHeight: "17px",
                                        margin: "0px",
                                      }}
                                    >
                                      Certificate of participation
                                    </h4>
                                    <p
                                      style={{
                                        color: "rgb(131, 169, 203)",
                                        outlineColor: "rgb(131, 169, 203)",
                                        fontSize: "12px",
                                        lineHeight: "16px",
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        fontWeight: 500,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        overflow: "hidden",
                                        WebkitBoxOrient: "vertical",
                                        outline: "rgb(131, 169, 203) none 0px",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                      }}
                                    >
                                      Level 1: E-Commerce &amp; Tech Quiz
                                    </p>
                                    <span
                                      style={{
                                        outlineColor: "rgb(136, 186, 229)",
                                        boxSizing: "border-box",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      31 Jul 22, 12:22 PM IST
                                    </span>
                                  </div>
                                </a>
                                <a
                                  target="_blank"
                                  href="/certificate-preview/1b28f42e-53bc-4692-bf9e-05a97a4cec16"
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    color: "rgb(66, 170, 255)",
                                    textDecorationColor: "rgb(66, 170, 255)",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration:
                                      "none solid rgb(66, 170, 255)",
                                    transition: "all 0.3s ease 0s",
                                    cursor: "pointer",
                                    boxSizing: "border-box",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <div
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      boxSizing: "border-box",
                                      backgroundImage: "none",
                                      backgroundColor: "rgb(24, 26, 27)",
                                      borderColor: "rgb(56, 60, 63)",
                                      background:
                                        "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                      width: "55px",
                                      height: "55px",
                                      minWidth: "55px",
                                      minHeight: "55px",
                                      border: "1px solid rgb(56, 60, 63)",
                                      position: "relative",
                                      marginRight: "15px",
                                    }}
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/612cccd3bc368_Quizathon_certy_logo1.png"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        width: "calc(100% - 10px)",
                                        height: "auto",
                                        margin: "auto",
                                        position: "absolute",
                                        inset: "0px",
                                      }}
                                    />
                                  </div>
                                  <div
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      boxSizing: "border-box",
                                      color: "rgb(136, 186, 229)",
                                    }}
                                  >
                                    <h4
                                      style={{
                                        color: "rgb(136, 186, 229)",
                                        outlineColor: "rgb(136, 186, 229)",
                                        fontWeight: 600,
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        outline: "rgb(136, 186, 229) none 0px",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        lineHeight: "17px",
                                        margin: "0px",
                                      }}
                                    >
                                      Certificate of excellence
                                    </h4>
                                    <p
                                      style={{
                                        color: "rgb(131, 169, 203)",
                                        outlineColor: "rgb(131, 169, 203)",
                                        fontSize: "12px",
                                        lineHeight: "16px",
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        fontWeight: 500,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        overflow: "hidden",
                                        WebkitBoxOrient: "vertical",
                                        outline: "rgb(131, 169, 203) none 0px",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                      }}
                                    >
                                      Reliance Quiz-a-thon 6.0
                                    </p>
                                    <span
                                      style={{
                                        outlineColor: "rgb(136, 186, 229)",
                                        boxSizing: "border-box",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      30 Nov 21, 01:02 PM IST
                                    </span>
                                  </div>
                                </a>
                                <a
                                  target="_blank"
                                  href="/certificate-preview/1f233472-c303-48ca-a72b-ce4679e8dca8"
                                  style={{
                                    outlineColor: "rgb(66, 170, 255)",
                                    color: "rgb(66, 170, 255)",
                                    textDecorationColor: "rgb(66, 170, 255)",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration:
                                      "none solid rgb(66, 170, 255)",
                                    transition: "all 0.3s ease 0s",
                                    cursor: "pointer",
                                    boxSizing: "border-box",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <div
                                    style={{
                                      outlineColor: "rgb(66, 170, 255)",
                                      boxSizing: "border-box",
                                      backgroundImage: "none",
                                      backgroundColor: "rgb(24, 26, 27)",
                                      borderColor: "rgb(56, 60, 63)",
                                      background:
                                        "rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box",
                                      width: "55px",
                                      height: "55px",
                                      minWidth: "55px",
                                      minHeight: "55px",
                                      border: "1px solid rgb(56, 60, 63)",
                                      position: "relative",
                                      marginRight: "15px",
                                    }}
                                  >
                                    <img
                                      loading="lazy"
                                      src="https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5e97c9b138753_60res.png"
                                      style={{
                                        outlineColor: "rgb(66, 170, 255)",
                                        boxSizing: "border-box",
                                        width: "calc(100% - 10px)",
                                        height: "auto",
                                        margin: "auto",
                                        position: "absolute",
                                        inset: "0px",
                                      }}
                                    />
                                  </div>
                                  <div
                                    style={{
                                      outlineColor: "rgb(136, 186, 229)",
                                      boxSizing: "border-box",
                                      color: "rgb(136, 186, 229)",
                                    }}
                                  >
                                    <h4
                                      style={{
                                        color: "rgb(136, 186, 229)",
                                        outlineColor: "rgb(136, 186, 229)",
                                        fontWeight: 600,
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        outline: "rgb(136, 186, 229) none 0px",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        lineHeight: "17px",
                                        margin: "0px",
                                      }}
                                    >
                                      Certificate of excellence
                                    </h4>
                                    <p
                                      style={{
                                        color: "rgb(131, 169, 203)",
                                        outlineColor: "rgb(131, 169, 203)",
                                        fontSize: "12px",
                                        lineHeight: "16px",
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        fontWeight: 500,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        overflow: "hidden",
                                        WebkitBoxOrient: "vertical",
                                        outline: "rgb(131, 169, 203) none 0px",
                                        boxSizing: "border-box",
                                        margin: "0px",
                                      }}
                                    >
                                      Green Mantra
                                    </p>
                                    <span
                                      style={{
                                        outlineColor: "rgb(136, 186, 229)",
                                        boxSizing: "border-box",
                                        fontSize: "12px",
                                        lineHeight: "15px",
                                      }}
                                    >
                                      16 Sep 21, 02:11 AM IST
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
          <noscript
            style={{
              outlineColor: "rgb(136, 186, 229)",
              boxSizing: "border-box",
            }}
          >
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1114135612720126&amp;ev=PageView&amp;noscript=1"
            />
          </noscript>
          <noscript
            style={{
              outlineColor: "rgb(136, 186, 229)",
              boxSizing: "border-box",
            }}
          >
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1114135612720126&amp;ev=PageView&amp;noscript=1"
            />
          </noscript>
          <noscript
            style={{
              outlineColor: "rgb(136, 186, 229)",
              boxSizing: "border-box",
            }}
          >
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1114135612720126&amp;ev=PageView&amp;noscript=1"
            />
          </noscript>
          <div
            style={{
              outlineColor: "rgb(232, 230, 227)",
              boxSizing: "border-box",
              backgroundImage: "none",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgb(232, 230, 227)",
              color: "rgb(232, 230, 227)",
              textDecorationColor: "rgb(232, 230, 227)",
              textShadow: "none",
              border: "0px none rgb(232, 230, 227)",
              borderSpacing: "0px 0px",
              cursor: "auto",
              direction: "ltr",
              fontFamily: '"lucida grande", tahoma, verdana, arial, sans-serif',
              fontSize: "11px",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              letterSpacing: "normal",
              lineHeight: "11px",
              margin: "0px",
              overflow: "visible",
              padding: "0px",
              textAlign: "left",
              textDecoration: "none solid rgb(232, 230, 227)",
              textIndent: "0px",
              textTransform: "none",
              visibility: "visible",
              whiteSpace: "normal",
              wordSpacing: "0px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-10000px",
                width: "0px",
                height: "0px",
                outlineColor: "rgb(232, 230, 227)",
                outline: "rgb(232, 230, 227) none 0px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  outlineColor: "rgb(232, 230, 227)",
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              outlineColor: "rgb(136, 186, 229)",
              boxSizing: "border-box",
              height: "1px",
              left: "-10000px",
              overflow: "hidden",
              position: "absolute",
              top: "auto",
              width: "1px",
            }}
          ></div>
          <noscript
            style={{
              outlineColor: "rgb(136, 186, 229)",
              boxSizing: "border-box",
            }}
          >
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1114135612720126&amp;ev=PageView&amp;noscript=1"
            />
          </noscript>
          <noscript
            style={{
              outlineColor: "rgb(136, 186, 229)",
              boxSizing: "border-box",
            }}
          >
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1114135612720126&amp;ev=PageView&amp;noscript=1"
            />
          </noscript>
        </body>
      </html>
    </>
  );
}
