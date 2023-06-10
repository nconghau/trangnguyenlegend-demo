import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex m-auto w-4/5 py-4">
      <Link to="/" className="w-1/3 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
        <img
          src="https://lh3.googleusercontent.com/fife/APg5EObQHggeSfyjDryjnUz5L4SjnL7u9mwcYijLuKBTcndOm_it3oBBtcxAUr0XwBKZT5f9P2Y2zM2mCdSVu2shapNlG4LviW_K0NG-VXAecymRiW09uTm6D77r_J9dVJuzzr-tIATouMfw857hxtaxSj-bL5JmpF1uIvoZPH30IRt7KWNoEv8pj93KIb1LoMmwYKuCfWfTg3Oy9Onr8XTyw2G2nYmLgW---wVRV94w-MtfHqQmgF9I2-gNQbvO_lgalCdyGnkLqBHAZayrFuAwGiXRL7yye-c8cRvrJ6Cn3RH967uJ2nTBfaSrYv3J-LCVyK65wql4in8QXKtrO8dnZt8mjcTcH8CJlu25AzjZm6nbU5OqylWRmmAL5CC9wtTyRqquvjFLsoL8fhNpGzakDo-CvxwkIE_pod7dSRDnpTxmB4ObZSgzapZeftCIZPZNclzNH4oJDdESuMdsYXdnqmAw4KtDlXcPw304QCnu7r6ZWBceI9NXkrLijpMnl0KN8rXx6P_fu50ZFOPA5jmEzlFkhhcZCuBV5-KrRrKp_ccp933XxtcsttaVC2jz4XCWJtIR34EXcswMpimP5ZTvbTFwf0vYIn2VKD1M-npoY0k5Kx6kCX3itfqe5ZpJ07GYh0-a9WYKIsS1x23nKFH9qaOBColQY5e7d81kJ44KcWKz10M8T-qt5CfzJlDZ6j0gcVeK1IJXci40uG0YV3QQxqSVHvgGS2DeIFQPdcHlrDYdCY9AQVHoPiOcPhgUbG9bnFCDPAkragAHwsknGLsw-XH60Od81JxU4R0AiJCLZZlTps8_mIA-AUwGKzKmFsQ4eQHmUQ-ZxMErkNTnLOodD6dty32RpY9AQBuBun-v8DIaIiMwR-wjLZ5MI2Ng_H7oXhb_XOVDHBMTMJ9UvchtDwZI82Os9MmagQfs9yh1AUIynJCyKzl9XSUM7WhRTbfLlJAZqUoK7j00M2K4fjV7IUyQIp_V11y5hFCEsxSAL3hRZKvOIVLs5NuU8TrMzm1kzx2N_TD0zInZPrgvmLdw8ITAAZT7EaMgQ80K-7OxgeV3uPWWU8nJeREOLlNvbFH9HPeK7VyZlGyUbtZ8Pv7qmPUiAfq7tZhxvBl4Ys-3ft6vhSI195VSisSZ_PTq_Ak7v9_e6iuJn0cy97iE79h822vBiwNDmDeo83s-S4JsH0IkKcTQ6jR7cJ7pgG_KXXyJ8V_z1yDaUSxMsuBEbOWpATNaaNLaKMJGX1VkMKjjEzjOHIH8vpozfEQKxtlTf_mDBOopZDQRIidUk8sDhIHGwiVcs3NMaw01P47Yyix2uZfXtk6zQ0Ol8byfFW-fh5lBzTqxVtJgipEiXsqjwAreiUchJmj-zSDyE4Bnh96z-vxXKj8esHZSq7Cb38r1d3l--0FP8-fhUlS8iybNzTGFSFhMJ6ib4kX7thRPm6PTNl9QJ_Py0WnqniekEvTxgTXBhgRbG4fnD3_JEX16ChTtoy0l9pOfgw4odOK_mAPuS_RPdBC3RSDeGICkttK6OVa6tAwBbI9YIf5N2-UCTkSRmQx1yXLHFPxCSgH0Qwv6bKIHVNW1B_WUi1UTl7hGT7xanmXiNU5U_R-vkXF5jL9A7-UaGJrap098qSlhQB3QR0t30d7ti3QjqznTLznKj5c1j_hvDNz8x7JgPGmjag=w1920-h902"
          alt="Google"
        />
      </Link>
      <Link to="/product-list"
        className="w-1/3 m-auto text-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 text-[#6B120A]
	"
      >
        Tài liệu của bạn
      </Link>
      <div className="w-1/3 m-auto text-center transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer text-[#6B120A]	">Làm bài tập</div>
    </div>
  );
}
