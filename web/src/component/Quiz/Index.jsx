import React from "react";
import Api from "../../api/apis";
import Header from "./Header";

export default function Game(props) {

  const [chatgptResponse, setChatgptResponse] = React.useState([])
  const [quesionData, setQuestionData] = React.useState({})
  const [quesionIndex, setQuestionIndex] = React.useState(0)
  const [answer, setAnswer] = React.useState("")
  React.useEffect(() => {
    Api.getChatGPTResponse().then(res => {
      setChatgptResponse(res)
      var first = res[0];
      first.result = JSON.parse(first.result);
      first.response = JSON.parse(first.response);
      setQuestionData(first)
    }).catch(error => console.log(error))
  }, [])

  return (
    <div className="bg-[#F5EADA] fixed top-0 bottom-0 right-0 left-0">
      <Header />
      <div className="w-4/5  m-auto">
        <div className="mt-24 flex flex-wrap">
          <div className="m-auto w-80 max-w-full rounded-lg border-3 border-[#E9C37C]  ">
            <div className="flex justify-between">
              <div className="">
                <img
                  src="https://lh3.googleusercontent.com/fife/APg5EOZMtwmOJvKwTEsVpwTHbx--1O1ihwgX4f81PaB87jFcNYC83ndH5mVCmjDCfEKYSwKXPHXIaP7cJnsoDF-okVYhOmnENrVJMNQBML-6ZeCpCjPvzapk-0cHIw_FQIIwRipnDaPxFXZhOjVg5uV_ggiS-Am8DhyI8esFXBJNuBz-IQ9aQQ-IgCvnGPy30WSoCDJTx-7CiNpkDTd2zzFOAugUBAugSxtlMfM0572zRT93GajWm66EWEv6LRD2KPT0BznVi7NS13j508Ij-dlRE13Xx2fIYFGJYAQPotvK5-uVXHYt6bTFYlQyCf9Oet0r2zgV2A7V8_rGkk_y5GB1RPTu3mtLp3J0AoVir1IGay7OZx0SbwhHJaIc05V9vw3bIh4N5CEAIeWHcWabvTfVBE2-j4moneehmaUTruGEyBX5DAPs-pmQhes1BIFMqvNGX99JAswsFHcR-oSmPUxkB9mx1L-m5uMOyR4GDsNldr9cjkaZ8GaaPWCcKkkPm9GeKrlBEJuTHHKR6GsYXNw09-fNfm09ZqlZF2HPRA2BM92PNNTJOLZ1d5wzSbtX2rln9MtTPWGqUVlPtFYfYZcx-Njf1JKE7EFHob_2372xoNPO77VpyGTAf-J-w5odUJH6H5dNO-Pixv96RBU3Scvx5WNqSiLEd7gvPV6VusV4QuUy9TCQctlUAH8Xu5SZchAzhlZ5tczNML9CHepiMPDigaWuhZrCBJrXVZxz_J0nOLy1WzS_OTNys9GQp0RIkiydlfsa0RH2X_3le0EmthO4bWFMWybt99lIj13QZkbCewM9hy7r34B8axCVcaq2PJGw00MqwSO7aNP7F4YG-rNpQjdsOhetfz-hWlOyhrVmacz1O_eJKYZIe19kWBZjYEDna_kgL5_ZFo2vJxTWUKPrbaVGBT1GFa-FakF_daYmHXI67IHcrjL_1laPEYP2kf-rccanDZMzxRKw95BJkdpvHlmhXFaQNbShQjNJmxQ_dDZhiQy5zDPs94J6TkuXIIFDoe24U3uFJj6oBXzCKHZQ7kTDYpTKevuC3zGYsS4tpUp4FLNptvLi4CYtQZ5eKAS5EB19BWxskMjgXBb_VOQrNoS-3-5Gf_536FN5Q6drZvZdXygPrE3BIB5iHp4ug_gYG6rHLh6IbRoKqUnzU_Pldi-VuE6L6GZfKUzEe1iWsCnGiezBxzCqeFtt4TXanR45d6WI9SsaDRe8cwPY8d22RvCjI9gOjlXmEhVY7yQaDjTxIECWfXMvjOnyCrMyS5f84ebd9z-u1IeofFXG5FsjoqCBMVhGe2xbjAmarhKH-pe4dMFwMaPrPbwHKpGXbIVDPcpJ2pZInfbXHsCPItmHdcLcgymjkzzMBmMqle3t_wdLkLw8rLUc9gZ5hyTOkPA-xXTeNs-GGWaV-EYKcvIAM5dG66Q3ZmmpC9ak8VVx5m7q7jraCp-cdODLWivJ6XNvMDvmqDNzQN24kfypiHWchDik4aNUifUjf_ldd-WU_bvOhGSh4uOKVAKytdZiLoZH2bdj96_o2n8d3HKq5rQxpfBMtskfrYCCF5VdDtqPQU3zpEa10uGlhh2Ja1kaxWpDcJ6-p-1uhej6tg6oPN0yyASXWoHQetilXDV7ofCIHExWQTccKBzPGqk_eeNQiigrlxviU0dc0qYHW_JTiA=w1520-h704"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://lh3.googleusercontent.com/fife/APg5EOYxd9RPjULcnVY23uYLt36u7PC1iuebFga7-BVck_5mpd3jYhzq_4fKKXMcpsnhx4kTcoD3pD9HMdYcvk8WRmOrMxdyrf9Oy7gYuyR6tUlUDIx1ko7AGcTBl1XCodoanfWgcD3e-uFwTlglvcZcmBEbXmAlk4sQDAjVWeqJa8ZWhF5ojKxGG0CSykYVhJlBlY1G3OUDsQYYt8PqXFuUaDTRUP-QCA_Ybv2IO6Fjh1Zfm-s6UKv70HLbKfx2HLtJRAOpJ02vKOR2vmZsWu-tdqTEQFXn-RKR3PMIH-fjjJ1CmC2BIh7a5QkLXxVbx8uV1jW48zQZfai4pUuUpyXkPQYvSe9MPO1OzwUYiHghcdVFF6Ien2YN_gtGSL0sx2Bp5lGrC6Yips3IFQKRMXOZyKYLIrYfS949czf7VFpHr1nxa8O6rMoKTVuSbzPJywAZy-kT-PzYExC7VmhjYigZkjnCFkyedHAScTfA9hHHUeSPfMhTebd0yzBEy7rlxFRUfWu8RNUzkX3pieI4f7Qyny6YVCd-BIll2CtzBxl1gowJ7mWaLiVZpgqI8oXUnw3QXN9xJdfPFosD7kSKyCKNdElfTC9MbGUWE96UrCMPenU8Byd3Q-7uH5G-UwkydEKQIytpzrzxA4v1NpW4QO990sa_bImi4VSDYKCj1hKPvJvheGbT57tYG56JouarLMcKCIhGDOAtNKzgL0vdoDb1rV56IqEhfDOEJi2Gu2XCXDtJ8Oie7si5Bk8Na8VUzlFVkOkbyQGhn7jxr90yt3-aBGgI3VJ56xSF5vn0VjUR14mjPv-SIGcUWmxgXvp6O9NDqEmWG1O9bYhHoES23atLyosUfnVGguNe3FfzD0NwxRoxL0r3PKR-P01N35x6-7F4y03eOj3MUqRKt7VYDi1phV9lXjMpWRQfHoK8Y_oNrnC9jL8vFmM6jO56gPdA2ktw_B_aHdSopjt9ec3Ci6aUTontFn8iya_dSySnmcb8kE1KL7QczxyWEpAxMzbtLPZpU5sYieA4TAlYI40UFH28TbgScGYJtYjJ-wa_ahoavLmY4Recf_71jyzxi1IhcvG--XKh9sCW_mY8qHQJAXgcZcdqgTNMv57KwfJLLNSk6G20oSjoPPiNmef6hZyRv4Z9PJ1nXTX4tAZ1NAvVmmJKq0qVa8c_nBi4zv0j5T0b7487oLVYwkRgq7qI6leoRiQdJW8FE2-n_cf6o-w_94jalT5rdzHHMXXv-fPdm4fp4VP5TIi4K6gAzg4W7KuZFJcFSHXIPWb2PrKhMt6KR1Q9IN8-Fky0oAmj6CLJJVG8hXapKHGMpaEAG4m9lgK37fccoEsxkZiY3INbMQW9Rj64UaCG7A0bubiGjn0HFJI84ieaePChmGdupOh-HJjjSE5kKZki70cA6GsCaBjce1vH7VjVsDCnjh4Or_1fzamD-imZyT4TVThD1hziSrQuvpgU-v3kkhRDKyK0VRBnbbRmodnUw0RXIAU6rsOGrlT5wXHvKkyAuTfcSBF93GkFWTyv8_At1t7kT4GcJ2PAhpaPm4jRv42xYJ5egb_gIuyiR6F-WdQGnpFJdK3Uw6i-LOjbbhHEVMK10c5E_NP5UJD4imU56nD9zlkOdA6DLCO1GVyMo-X5KoMUOyJ3MoDZVeiKadjGf5zL_I0Nxgmk-Q=w1520-h704"
                  alt=""
                />
              </div>
            </div>
            <div className="w-11/12 m-auto">
              <div className="">
                <h1 className="text-xl font-bold text-center">
                  Trắc nghiệm từ "{quesionData?.file?.[0]?.name}" <span className="text-sm">({quesionData?.file?.[0]?.size})</span>
                </h1>
                <p className="text-center">Câu {quesionIndex + 1}/{quesionData?.result?.questions?.length} </p>
                <div className="flex justify-between mt-2	">
                  {Array.from({ length: 5 }, (_, index) => index + quesionData?.result?.questions?.length)?.map((item, index) => {
                    return (<div className={`w-10 h-10 ${quesionIndex == index ? 'bg-red-700' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>
                      <button onClick={() => setQuestionIndex(index)} className={`text-gray-600 font-bold text-lg focus:outline-none ${quesionIndex == index ? 'text-white' : 'text-black'}`}>
                        {index + 1}
                      </button>
                    </div>)
                  })}
                </div>
              </div>
              <div className="mt-5">
                <button className="w-full text-[#BC2F22] font-semibold py-2 px-4 border-2 border-[#BC2F22]   rounded-3xl">
                  Hủy bài
                </button>
                <button
                  type="button"
                  className="w-full bg-red-700 hover:bg-red-800 hover:text-gray-200 text-[#BC2F22] font-semibold py-2 px-4 border-2 border-[#BC2F22] mt-2  rounded-3xl"
                >
                  Nộp bài
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <img
                  src="https://lh3.googleusercontent.com/fife/APg5EOZc6INNk-zqv76wN_ZLUk4Rbf0HsKHnPbqlIQNaXKAaQOVK04gWyLMNR3S-K3jkvCtIuF8NttVFsmRpMrgmQOtXVwIJ6MkJiwh3NMEEupQWv-hNGYOIV1eYm-8xvjR5dxTRVGutncF19Z6-30UzNsDlhua47-bHliF8y9feb2rzYglMuO5Zzf9Mi25E5JhyyRENUls3AKsOpLR2TjqBixu1m4ka7FDc8PcveT9KAJC_F4j1utYFIB9XYr-ZR9g5NhAzU4yokWd41YiK1INLfS97RAQ2riZQqK8LrAvwqUm1vYtkPHB2yv5viJ7wp0IuZkRg7Yg_iDi4f_lHSggglu0FNqbp8uxET4LQSg899WFjIzHSy0Vwq3LfrDF7GYuTxL3D8M1uEny-N8IXW3YaYtUxAqi6wFWdTj8doxv95JFt9EOUVTLTH4uuXBXAQZB3kA6ifGHA5GVvUrMtqhs1VkaSvlnZSePk4pf7tZl_S1dpmnjbvvBlILxiZmMFaLl9NxKxjameF_3cWPZ8P7X7Ep5TXFEGD8x_pIfbzEAvyaZCwkY851Tg03L_EOmi-RLToP9p_owuAXSm9DN8QooWWLU9EzQQ21kjHdzIBe3F2OqU-9x7hA463FrO8RTTA-d6i6zQmSYGYMtsAcBAT9Q0eEjqoCd3nCsmh176B3dExjQxvkSCgMT_vfT7RGOHKoQy3GkGCUnUxKUnEBJQ_xKL3q6Lr19OPP7RuNd1Es4NGBvkM-minJo65jOGhMF9QkM5WupxRa0UOKvN83vGBSVPhGXEjTID5NvqNbuQEeX1JoegGD67g8w34BQuXNBeCpw1HqhHoNpPDvA8OgWACOg5C4GW5hWQVGhXgkpwcxGvXTMlPiXvvjHfQUqaq6WGXian1_U--YofU8AeoCClGRqsoRdwUWiNgcDnJ6R3imx_-ghKH2VEnoThxoShhRWr51rYpvdcRFVp8FtU9YIs5hmU39s8PZ6pz9iZYeklt1_6SpsEaXLedHIdVsjL7sN67tjFKddNJtlaX-zTWxtPRLDEshRAtuL_NX4hEshyc49H-pAntBIWI-ocMAtdWB7SCdcXtTHjw5ZvvxkrCvWMVa0myQECvkn8U3KPfwacy-C_o3kebFm7_mSP2Jc6WB6RChUEDR3_YrQXCIHgy-phc2Td9KBT0WrINkHfuw3wa2oGocI6KMK1bHbI2MhFzGtTm3hPmSYPs6odAefVY9WMNfInFH8tVZkq7l8U4DiQ6_Uy5wfbMvzrPYO6xLZpNYkmpCUTI3GeVzrtKb_eQZQj0JvBf5ClB8yLeW2MMJglHv5RiYy2u9pZTG0C9w1oAL9eGF53RNm7PLFrXicT1MfMLiW-v20tCCcuSswP7rgOG7rYiQcAC0nM1vPdDCBxTVpnbQrPwRs9VzCJYkBTGlEF69F7Z0dd8laqXLiMiGCFJwsNd3VOTFpvjG6Afwf_wqVKZJ9jYZTaAEunIfYC0wq4zRGJsClBU_qQ0-9XO8QVZaL8mKmhm1raxebmuLjAg9r-3O91Xlsxa_T_2c9VsTU3yb2gZqOLMPAVwK8ImBG5AkEV5h41LbNgr9CyNRfw-QWD16JMYTE1MjVX8u0qnrkTgKpTIMDfVsAd_goTvrNMCN1jkcdrBttiEZ9r-72pBif2SlfYI-RnN5KUAUExr6ZvOQ=w1403-h936"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://lh3.googleusercontent.com/fife/APg5EObrOeu98vmusfWfvV2sspQlI7E0VPeJelq_LpsnffuhV6hWZsyC392cUOnFQaP6yPurhxfIDTDDbwAz3NOYoGT9acJh1JClQRB5d7EiZ1FxYtP_WBlBmMA9NZdSPDu8HdvzsxxTtJTtD_n7cdTBKhoKc9Xb-rVFTUzcJCjUHlKO-CTvAt2YPErGr44fUwqGQSh-4WvD2k184WTMnq0Rup1VcopLOaiPfq9cTJyrOQFI9HSA4X-CeeiID60n-BWnzOAZo2KeHYBsNJLfIHDJV0tAPc_m5fwdPsKdgCsufJdvjskBQE3DXRdoQlf7Rxr4rlQ9JlRbUaXFMnZon95r4BypCJ57dMfZjSHCQrhPe6iLPvGPxzsEDXlvK0w89MBEFwSrO7Gkk8lWp7QiTVKsvgfCHJ-HKhTS6YKCPd4-aC7p-1Ofsa4jDAQhsOcepHFX22CCzEsSiC1rvmg1DmxEoHnfyijhyVaZYSLSYMbvTguzZDgASM6Yetnak_LWOIOLjKARhfOFJ8vAD5mRXeOdbVAdNRNWZM3_oXrDDRGKLckbm9Z2R9ESJnGABJv9iBkOCOCvuztQYWw5203dKf-KixG7eVzVKkasz3mxkiWLnYXqeKe1YAhSBebeTYZxfbM83SCdfPheN0aU4f-A6LFrBNbACeP1RAaFCx4tXk0uQRONDH-n5dQC9ad2oSj52Xr7dPioryWwJUyFgONIpB3UTqh3L_QGULU7FqqNV4fMjvwMixf55vSjja7Ury5cv7J7IFtcKHXCI6exBaXRKktmvfv1fb0qQNtgjqstW3y6rHVghTQ1Ddhz84qSVr1LdHUr9ez2KaPeR0MZTnhgG5Ca_EePzKoRrC4Jx6pGvNAupiFlE1vihJVzq-51oF4PPygKb12jwOxJ2JjMZkZO7LxCyQ9dfzpOMnX5vWYHh5Tmb7wiDoMRXO37U6bwblI7R9CDH1ukJl1UWramoyrqDNRhYX55un-FInjQwC6V_1yAUPtric6jmE3_xp_vQbEf-xr83NJnw2uyf5Vx7ulWHYEP7QAXFTFT0o8BTK9TVQZM9nIcp30TT4jgGg7AXLKoe_kml81CTQ05WLaA4jAM7nObngRglwvOYCaFicF4H0dwCvRQ4RT-6gqfSL_NLmy2yaTByTgv24drj8wfEl76iL6lV28-cXZ1dVmfOSXEaaQstRKthgQddsucvWft_DvEFz8jZvj6nJ5fBPMJFVdLtLDTDnPJ2cMfyHF2Aq1wUWKTICY_XL2lZmJbv9asnlQX7v-2-Tc306Ht7Oz-IKF8JYRmjKjP17EA54so7MBiAxjPpbtgspgMPqv64sYbnrjlgxdt9g0xnfa1eFMa_Tr-fICIgFLn6qwMzspxx3nNQcLlnxniZHoMEq8-8_KaLwgH-hgxndtNoiRBn67s-zR7JsgxrElsseLSprEC9bjCQQFQeiF1SW-oJF2UIX2OZBZJ5jZB9ByV8ixTlnOEqFNbQClDNu9LVPr1isRafbc31cJS4cymiLU0F_QsYA2GwBi8pOOQXNZZPCc_5k5T3wZbf3YUvUNO7-tVnRkbJc4yrYObgpcgXpQYAISQ4BggXyHZh2TkrWp8b0vytLzl7vYxI--QRjt-QKcftXeESXoyMHN_3WCPDsoCoAZVaHdrYx6sg-40orBVM5zyf_zFQ5ovig=w1403-h936"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-3/4 bg-white ml-7 flex-1">
            <div className="w-4/5 m-auto ">
              <h1 className="text-xl mt-12 font-bold ">
                {quesionData?.result?.questions?.[quesionIndex]?.q}
              </h1>
              <div>
                {quesionData?.result?.questions?.[quesionIndex]?.a?.map((item, index) => {
                  return (
                    <button onClick={() => setAnswer(item)} className={`text-left w-full ${item == answer ? 'text-white' : 'text-black'} ${item == answer ? 'bg-red-700' : 'bg-[#F5EADA]'} mt-4 font-bold py-2 px-4 border rounded-3xl`}>
                      {item}
                    </button>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}