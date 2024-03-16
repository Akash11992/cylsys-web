import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,

    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>','<i class="fa-chevron-right></i>"'],
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
        items: 4
      }
    },
    nav: false,
 
  }



  clientImgArr: any = [];
  @ViewChild('clientList1') clientList1!: ElementRef;
  constructor() {
    this.clientImgArr = [
      { name: "slide-1", url: 
      { 
        url1:  "assets/images/clients/cylsys%20client-amazon.jpg", 
        url2: "assets/images/clients/cylsys%20client-Uti%20mutual%20fund.jpg",
        url3:  "assets/images/clients/cylsys%20client-TaTa%20Capital.jpg", 
        url4: "assets/images/clients/cylsys%20client-Safegate%20Group.jpg" 
      } },
      { name: "slide-2", url: 
      { 
        url1: "assets/images/clients/cylsys%20client-ICIC%20prudential%20life%20insurance.jpg", 
        url2: "assets/images/clients/cylsys%20client-fullerton%20India.jpg", 
        url3: "assets/images/clients/cylsys%20client-NeoGrowth.jpg", 
        url4: "assets/images/clients/cylsys%20client-pfizer%2075.jpg" 
      } },
      { name: "slide-3", url: 
      { 
        url1: "assets/images/clients/cylsys%20client-Wolters%20Kluwer.jpg", 
        url2: "assets/images/clients/cylsys%20client-jetking%2043.jpg", 
        url3: "assets/images/clients/cylsys%20client-yes%20securities%2059.jpg", 
        url4: "assets/images/clients/cylsys%20client-Paytm.jpg" 
      } },
      { name: "slide-1", url: 
      { 
        url1:  "assets/images/clients/cylsys%20client-amazon.jpg", 
        url2: "assets/images/clients/cylsys%20client-Uti%20mutual%20fund.jpg",
        url3:  "assets/images/clients/cylsys%20client-TaTa%20Capital.jpg", 
        url4: "assets/images/clients/cylsys%20client-Safegate%20Group.jpg" 
      } },
      { name: "slide-2", url: 
      { 
        url1: "assets/images/clients/cylsys%20client-ICIC%20prudential%20life%20insurance.jpg", 
        url2: "assets/images/clients/cylsys%20client-fullerton%20India.jpg", 
        url3: "assets/images/clients/cylsys%20client-NeoGrowth.jpg", 
        url4: "assets/images/clients/cylsys%20client-pfizer%2075.jpg" 
      } },
      { name: "slide-3", url: 
      { 
        url1: "assets/images/clients/cylsys%20client-Wolters%20Kluwer.jpg", 
        url2: "assets/images/clients/cylsys%20client-jetking%2043.jpg", 
        url3: "assets/images/clients/cylsys%20client-yes%20securities%2059.jpg", 
        url4: "assets/images/clients/cylsys%20client-Paytm.jpg" 
      } }
  // "assets/images/clients/cylsys%20client-amazon.jpg",
  //  "assets/images/clients/cylsys%20client-Uti%20mutual%20fund.jpg",
  //  "assets/images/clients/cylsys%20client-TaTa%20Capital.jpg",
  //  "assets/images/clients/cylsys%20client-Safegate%20Group.jpg",

  //  "assets/images/clients/cylsys%20client-ICIC%20prudential%20life%20insurance.jpg",
  //  "assets/images/clients/cylsys%20client-fullerton%20India.jpg",
  //  "assets/images/clients/cylsys%20client-NeoGrowth.jpg",
  //  "assets/images/clients/cylsys%20client-pfizer%2075.jpg",

  //  "assets/images/clients/cylsys%20client-Wolters%20Kluwer.jpg",
  //  "assets/images/clients/cylsys%20client-jetking%2043.jpg",
  //  "assets/images/clients/cylsys%20client-yes%20securities%2059.jpg",
  //  "assets/images/clients/cylsys%20client-Paytm.jpg",

  //  "assets/images/clients/cylsys%20client-c-edge%2080.png",
  //   "assets/images/clients/cylsys%20client-tcqo%20by%20mahindra%2081.png",
  //   "assets/images/clients/cylsys%20client-jm%20financial%2082.png",
  //    "assets/images/clients/cylsys%20client-cactus%2070.jpg",

  //  "assets/images/clients/cylsys%20medknow.jpg",
  //  "assets/images/clients/cylsys%20client-yes%20bank.jpg",
  //  "assets/images/clients/cylsys%20client-wingreens%20frams%2068.jpg",
  //  "assets/images/clients/cylsys%20client-powerweave%2069.jpg",

  //  "assets/images/clients/cylsys%20client-hurleyx%2078.jpg",
  //  "assets/images/clients/cylsys%20client-thomson%20digital%2073.jpg",
  //  "assets/images/clients/cylsys%20client-HDFC%20Home%20Loans%2041.jpg",
  //  "assets/images/clients/cylsys%20client-Flexijoy%2044.jpg",

  //  "assets/images/clients/cylsys%20client-NAX%20Your%20Document%20Bank%2033.jpg",
  //  "assets/images/clients/cylsys%20client-Medical%20institute%20for%20Screening%20test%2034.jpg",
  //  "assets/images/clients/cylsys%20client-hurley's%2083.png", 
  //  "assets/images/clients/cylsys%20client-RRO%2028.jpg",

  //  "assets/images/clients/cylsys%20client-GoKhana%2039.jpg",
  //  "assets/images/clients/cylsys%20client-TSS%2040.jpg",
  //  "assets/images/clients/cylsys%20client-eattly%2065.jpg",
  //  "assets/images/clients/cylsys%20client-Auxilo%2036.jpg",

  //  "assets/images/clients/cylsys%20client-mindsclik%2074.jpg",
  //  "assets/images/clients/cylsys%20client-wingreens%20World%2079.png",
  //   "assets/images/clients/cylsys%20client-enhancesys%2072.jpg",
  //  "assets/images/clients/cylsys%20client-fynte.png", 

  //  "assets/images/clients/cylsys%20client-Tolia%20Group%20of%20Companies.jpg",
  //  "assets/images/clients/cylsys%20client-aditya%20birla%20capital.jpg",
  //  "assets/images/clients/cylsys%20client-olethia-wide-dark.png",
  //   "assets/images/clients/cylsys%20client-Gus%20Education%2042.jpg",

  //  "assets/images/clients/cylsys%20client-Edelweiss%2029.jpg",
  //  "assets/images/clients/cylsys%20client-frica%20Design%2030.jpg",
  //  "assets/images/clients/cylsys%20client-Aadya%20e-Travel%2031.jpg",
  //  "assets/images/clients/cylsys%20client-ITSFMG%2032.jpg",

  //  "assets/images/clients/cylsys%20client-enkash.png",
  //   "assets/images/clients/cylsys%20client-DBS.jpg",
  //  "assets/images/clients/cylsys%20client-rolla%2055.jpg",
  //  "assets/images/clients/cylsys%20client-fan%20zone.jpg",

  //  "assets/images/clients/cylsys%20client-GBITCSJ.jpg",
  //  "assets/images/clients/cylsys%20client-freeITStaffing.jpg",
  //  "assets/images/clients/cylsys%20client-IT%20Lead%20Manager.jpg",
  //  "assets/images/clients/cylsys%20client-HDFC%20bank.jpg",

  //  "assets/images/clients/cylsys%20client-ICICI%20bank.jpg",
  //  "assets/images/clients/cylsys%20client-Kotak%20Mahindra%20Bank.jpg",
  //  "assets/images/clients/cylsys%20client-raw.jpg",
  //  "assets/images/clients/cylsys%20client-myfundbucket.jpg",

  //  "assets/images/clients/cylsys%20client-online%20image%20editor.jpg",
  //  "assets/images/clients/cylsys%20client-openMed%2045.jpg",
  //  "assets/images/clients/cylsys%20client-titan-consultancy.jpg",
  //  "assets/images/clients/cylsys%20client-newsknight.jpg",

  //  "assets/images/clients/cylsys%20client-luzy%2048.jpg",
  //  "assets/images/clients/cylsys%20client-Globalskill%2049.jpg",
  //  "assets/images/clients/cylsys%20client-preview%2050.jpg",
  //  "assets/images/clients/cylsys%20client-healthken%2064.jpg",

  //  "assets/images/clients/cylsys%20client-tech%20mahindra%2076.jpg",
  //  "assets/images/clients/cylsys%20client-techplus77.jpg",
  //  "assets/images/clients/cylsys%20client-kickchat%2052.jpg",
  //  "assets/images/clients/cylsys%20client-spocha%20car%20parking%2053.jpg",

  //  "assets/images/clients/cylsys%20client-wopnow%2056.jpg",
  //  "assets/images/clients/cylsys%20client-nerdy%2057.jpg",
  //  "assets/images/clients/cylsys%20client-faerlrss%2060.jpg",
  //  "assets/images/clients/cylsys%20client-tranquiapp%2061.jpg",

  //  "assets/images/clients/cylsys%20client-friendlee%2063.jpg",
  //  "assets/images/clients/cylsys%20client-biizy.jpg",
  //  "assets/images/clients/cylsys%20client-controlshift.svg",
  //   "assets/images/clients/cylsys%20client-kodie.svg",

  //    "assets/images/clients/cylsys%20client-informa.jpg",
  //  "assets/images/clients/cylsys%20client-indianorion.jpg",
  //  "assets/images/clients/cylsys%20client-White-Lotus-Logo.png"
    ];

  }

  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    let imageUrls: string[] = [];

    // Select all images within the clientList1 element
    const clientImages = this.clientList1.nativeElement.querySelectorAll('.client-img img');

    // Loop through each image and push its source URL into the imageUrls array
    clientImages.forEach((img: HTMLImageElement) => {
      imageUrls.push(img.src);
    });

    // Create a JSON object with the image URLs array
    const jsonData = {
      imageUrls: imageUrls
    };
    console.log(imageUrls);

    // Convert the JSON object to a JSON string
    const jsonString = JSON.stringify(jsonData);

    // Log the JSON string
    console.log(jsonString);
  }
}
