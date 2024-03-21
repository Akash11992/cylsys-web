import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ui-ux-design',
  templateUrl: './ui-ux-design.component.html',
  styleUrls: ['./ui-ux-design.component.css']
})
export class UiUxDesignComponent implements OnInit {
  clientImgArr:any =[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,

    navSpeed: 700,
    navText: [ '<i class="carousel-control-prev-icon"></i> ',
                '<i class="carousel-control-next-icon"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false,
 
  }
  constructor() { 

    this.clientImgArr = 
    [
      {
          "url": "assets/images/clients/cylsys%20client-amazon.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Uti%20mutual%20fund.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-TaTa%20Capital.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Safegate%20Group.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-ICIC%20prudential%20life%20insurance.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-fullerton%20India.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-NeoGrowth.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-pfizer%2075.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Wolters%20Kluwer.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-jetking%2043.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-yes%20securities%2059.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Paytm.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-amazon.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Uti%20mutual%20fund.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-TaTa%20Capital.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Safegate%20Group.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-ICIC%20prudential%20life%20insurance.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-fullerton%20India.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-NeoGrowth.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-pfizer%2075.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Wolters%20Kluwer.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-jetking%2043.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-yes%20securities%2059.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Paytm.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-amazon.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Uti%20mutual%20fund.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-TaTa%20Capital.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Safegate%20Group.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-ICIC%20prudential%20life%20insurance.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-fullerton%20India.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-NeoGrowth.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-pfizer%2075.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Wolters%20Kluwer.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-jetking%2043.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-yes%20securities%2059.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Paytm.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-c-edge%2080.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-tcqo%20by%20mahindra%2081.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-jm%20financial%2082.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-cactus%2070.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20medknow.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-yes%20bank.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-wingreens%20frams%2068.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-powerweave%2069.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-hurleyx%2078.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-thomson%20digital%2073.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-HDFC%20Home%20Loans%2041.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Flexijoy%2044.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-NAX%20Your%20Document%20Bank%2033.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Medical%20institute%20for%20Screening%20test%2034.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-hurley's%2083.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-RRO%2028.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-GoKhana%2039.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-TSS%2040.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-eattly%2065.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Auxilo%2036.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-mindsclik%2074.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-wingreens%20World%2079.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-enhancesys%2072.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-fynte.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Tolia%20Group%20of%20Companies.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-aditya%20birla%20capital.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-olethia-wide-dark.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Gus%20Education%2042.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Edelweiss%2029.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-frica%20Design%2030.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Aadya%20e-Travel%2031.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-ITSFMG%2032.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-enkash.png"
      },
      {
          "url": "assets/images/clients/cylsys%20client-DBS.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-rolla%2055.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-fan%20zone.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-GBITCSJ.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-freeITStaffing.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-IT%20Lead%20Manager.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-HDFC%20bank.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-ICICI%20bank.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Kotak%20Mahindra%20Bank.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-raw.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-myfundbucket.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-online%20image%20editor.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-openMed%2045.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-titan-consultancy.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-newsknight.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-luzy%2048.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-Globalskill%2049.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-preview%2050.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-healthken%2064.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-tech%20mahindra%2076.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-techplus77.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-kickchat%2052.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-spocha%20car%20parking%2053.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-wopnow%2056.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-nerdy%2057.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-faerlrss%2060.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-tranquiapp%2061.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-friendlee%2063.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-biizy.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-controlshift.svg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-kodie.svg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-informa.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-indianorion.jpg"
      },
      {
          "url": "assets/images/clients/cylsys%20client-White-Lotus-Logo.png"
      }
  ]


  }

  ngOnInit(): void {
  }

}
