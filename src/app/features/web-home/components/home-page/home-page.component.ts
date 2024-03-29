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
    navText: [ '<i  aria-hidden="true" class="carousel-control-prev-icon"></i>  <span  class="sr-only">Previous</span>',
                '<i  aria-hidden="true" class="carousel-control-next-icon"></i> <span  class="sr-only">Next</span>'],
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
  
  techCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,

    navSpeed: 700,
    navText: [ '<i  aria-hidden="true" class="carousel-control-prev-icon"></i>  <span  class="sr-only">Previous</span>',
                '<i  aria-hidden="true" class="carousel-control-next-icon"></i> <span  class="sr-only">Next</span>'],
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
    nav: true,
 
  }

  techOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,

    navSpeed: 700,
    navText: [ '',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
 
  }


  clientImgArr: any = [];
 technologyClientImgArr: any = [];
  @ViewChild('clientList1') clientList1!: ElementRef;
  constructor() {
    this.clientImgArr = [
      {
        name: "slide-1",
        url: {
          url1: "assets/images/clients/cylsys%20client-amazon.jpg",
          url2: "assets/images/clients/cylsys%20client-Uti%20mutual%20fund.jpg",
          url3: "assets/images/clients/cylsys%20client-TaTa%20Capital.jpg",
          url4: "assets/images/clients/cylsys%20client-Safegate%20Group.jpg"
        }
      },
      {
        name: "slide-2",
        url: {
          url1: "assets/images/clients/cylsys%20client-ICIC%20prudential%20life%20insurance.jpg",
          url2: "assets/images/clients/cylsys%20client-fullerton%20India.jpg",
          url3: "assets/images/clients/cylsys%20client-NeoGrowth.jpg",
          url4: "assets/images/clients/cylsys%20client-pfizer%2075.jpg"
        }
      },
      {
        name: "slide-3",
        url: {
          url1: "assets/images/clients/cylsys%20client-Wolters%20Kluwer.jpg",
          url2: "assets/images/clients/cylsys%20client-jetking%2043.jpg",
          url3: "assets/images/clients/cylsys%20client-yes%20securities%2059.jpg",
          url4: "assets/images/clients/cylsys%20client-Paytm.jpg"
        }
      },
      {
        name: "slide-4",
        url: {
          url1: "assets/images/clients/cylsys%20client-c-edge%2080.png",
          url2: "assets/images/clients/cylsys%20client-tcqo%20by%20mahindra%2081.png",
          url3: "assets/images/clients/cylsys%20client-jm%20financial%2082.png",
          url4: "assets/images/clients/cylsys%20client-cactus%2070.jpg"
        }
      },
      {
        name: "slide-5",
        url: {
          url1: "assets/images/clients/cylsys%20medknow.jpg",
          url2: "assets/images/clients/cylsys%20client-yes%20bank.jpg",
          url3: "assets/images/clients/cylsys%20client-wingreens%20frams%2068.jpg",
          url4: "assets/images/clients/cylsys%20client-powerweave%2069.jpg"
        }
      },
      {
        name: "slide-6",
        url: {
          url1: "assets/images/clients/cylsys%20client-hurleyx%2078.jpg",
          url2: "assets/images/clients/cylsys%20client-thomson%20digital%2073.jpg",
          url3: "assets/images/clients/cylsys%20client-HDFC%20Home%20Loans%2041.jpg",
          url4: "assets/images/clients/cylsys%20client-Flexijoy%2044.jpg"
        }
      },
      {
        name: "slide-7",
        url: {
          url1: "assets/images/clients/cylsys%20client-NAX%20Your%20Document%20Bank%2033.jpg",
          url2: "assets/images/clients/cylsys%20client-Medical%20institute%20for%20Screening%20test%2034.jpg",
          url3: "assets/images/clients/cylsys%20client-hurley's%2083.png",
          url4: "assets/images/clients/cylsys%20client-RRO%2028.jpg"
        }
      },
      {
        name: "slide-8",
        url: {
          url1: "assets/images/clients/cylsys%20client-GoKhana%2039.jpg",
          url2: "assets/images/clients/cylsys%20client-TSS%2040.jpg",
          url3: "assets/images/clients/cylsys%20client-eattly%2065.jpg",
          url4: "assets/images/clients/cylsys%20client-Auxilo%2036.jpg"
        }
      },
      {
        name: "slide-9",
        url: {
          url1: "assets/images/clients/cylsys%20client-mindsclik%2074.jpg",
          url2: "assets/images/clients/cylsys%20client-wingreens%20World%2079.png",
          url3: "assets/images/clients/cylsys%20client-enhancesys%2072.jpg",
          url4: "assets/images/clients/cylsys%20client-fynte.png"
        }
      },
      {
        name: "slide-10",
        url: {
          url1: "assets/images/clients/cylsys%20client-Tolia%20Group%20of%20Companies.jpg",
          url2: "assets/images/clients/cylsys%20client-aditya%20birla%20capital.jpg",
          url3: "assets/images/clients/cylsys%20client-olethia-wide-dark.png",
          url4: "assets/images/clients/cylsys%20client-Gus%20Education%2042.jpg"
        }
      },
      {
        name: "slide-11",
        url: {
          url1: "assets/images/clients/cylsys%20client-Edelweiss%2029.jpg",
          url2: "assets/images/clients/cylsys%20client-frica%20Design%2030.jpg",
          url3: "assets/images/clients/cylsys%20client-Aadya%20e-Travel%2031.jpg",
          url4: "assets/images/clients/cylsys%20client-ITSFMG%2032.jpg"
        }
      },
      {
        name: "slide-12",
        url: {
          url1: "assets/images/clients/cylsys%20client-enkash.png",
          url2: "assets/images/clients/cylsys%20client-DBS.jpg",
          url3: "assets/images/clients/cylsys%20client-rolla%2055.jpg",
          url4: "assets/images/clients/cylsys%20client-fan%20zone.jpg"
        }
      },
      {
        name: "slide-13",
        url: {
          url1: "assets/images/clients/cylsys%20client-GBITCSJ.jpg",
          url2: "assets/images/clients/cylsys%20client-freeITStaffing.jpg",
          url3: "assets/images/clients/cylsys%20client-IT%20Lead%20Manager.jpg",
          url4: "assets/images/clients/cylsys%20client-HDFC%20bank.jpg"
        }
      },
      {
        name: "slide-14",
        url: {
          url1: "assets/images/clients/cylsys%20client-ICICI%20bank.jpg",
          url2: "assets/images/clients/cylsys%20client-Kotak%20Mahindra%20Bank.jpg",
          url3: "assets/images/clients/cylsys%20client-raw.jpg",
          url4: "assets/images/clients/cylsys%20client-myfundbucket.jpg"
        }
      },
      {
        name: "slide-15",
        url: {
          url1: "assets/images/clients/cylsys%20client-online%20image%20editor.jpg",
          url2: "assets/images/clients/cylsys%20client-openMed%2045.jpg",
          url3: "assets/images/clients/cylsys%20client-titan-consultancy.jpg",
          url4: "assets/images/clients/cylsys%20client-newsknight.jpg"
        }
      },
      {
        name: "slide-16",
        url: {
          url1: "assets/images/clients/cylsys%20client-luzy%2048.jpg",
          url2: "assets/images/clients/cylsys%20client-Globalskill%2049.jpg",
          url3: "assets/images/clients/cylsys%20client-preview%2050.jpg",
          url4: "assets/images/clients/cylsys%20client-healthken%2064.jpg"
        }
      },
      {
        name: "slide-17",
        url: {
          url1: "assets/images/clients/cylsys%20client-tech%20mahindra%2076.jpg",
          url2: "assets/images/clients/cylsys%20client-techplus77.jpg",
          url3: "assets/images/clients/cylsys%20client-kickchat%2052.jpg",
          url4: "assets/images/clients/cylsys%20client-spocha%20car%20parking%2053.jpg"
        }
      },
      {
        name: "slide-18",
        url: {
          url1: "assets/images/clients/cylsys%20client-wopnow%2056.jpg",
          url2: "assets/images/clients/cylsys%20client-nerdy%2057.jpg",
          url3: "assets/images/clients/cylsys%20client-faerlrss%2060.jpg",
          url4: "assets/images/clients/cylsys%20client-tranquiapp%2061.jpg"
        }
      },
      {
        name: "slide-19",
        url: {
          url1: "assets/images/clients/cylsys%20client-friendlee%2063.jpg",
          url2: "assets/images/clients/cylsys%20client-biizy.jpg",
          url3: "assets/images/clients/cylsys%20client-controlshift.svg",
          url4: "assets/images/clients/cylsys%20client-kodie.svg"
        }
      },
      {
        name: "slide-20",
        url: {
          url1: "assets/images/clients/cylsys%20client-informa.jpg",
          url2: "assets/images/clients/cylsys%20client-indianorion.jpg",
          url3: "assets/images/clients/cylsys%20client-White-Lotus-Logo.png"
        }
      }
    ];


    this.technologyClientImgArr = [
      { name: "slide-1", url: 
      { 
        url1:  "assets/images/tech/ui1.jpg",
        url2: "assets/images/tech/ui2.jpg"

      } },
      { name: "slide-2", url: 
      { 
        url1: "assets/images/tech/ui3.jpg",
        url2:  "assets/images/tech/ui4.jpg"
      } },
      { name: "slide-3", url: 
      { 
        url1:  "assets/images/tech/ui5.jpg", 
        url2: "assets/images/tech/ui6.png"
      } },
      { name: "slide-4", url: 
      { 
        url1: "assets/images/tech/ui7.jpg",
        url2: "assets/images/tech/wf2.jpg"
      } },
      { name: "slide-5", url: 
      { 
        url1: "assets/images/tech/wf1.jpg", 
        url2: "assets/images/tech/wf3.jpg",
      } },
      { name: "slide-6", url: 
      { 
        url1: "assets/images/tech/wf4.jpg",
        url2:"assets/images/tech/wf5.jpg"
      } },
      { name: "slide-7", url: 
      { 
        url1: "assets/images/tech/wf6.jpg",
        url2: "assets/images/tech/wf7.jpg"
      } }, 
      { name: "slide-8", url: 
      { 
        url1: "assets/images/tech/wf8.jpg",
        url2:"assets/images/tech/php.png",
      } }, 
      { name: "slide-9", url: 
      { 
        url1: "assets/images/tech/doi1.jpg",
        url2:"assets/images/tech/doi2.jpg",
      } }, 
      { name: "slide-10", url: 
      { 
        url1:"assets/images/tech/doi3.jpg",
        url2:"assets/images/tech/doi4.jpg",
      } }, 
      { name: "slide-11", url: 
      { 
        url1: "assets/images/tech/doi5.jpg",
        url2:"assets/images/tech/doi6.jpg",
      } }, 
      { name: "slide-12", url: 
      { 
        url1: "assets/images/tech/doi7.jpg",
        url2:"assets/images/tech/doi8.jpg",
      } },



// "assets/images/tech/doi9.jpg",
// "assets/images/tech/doi10.jpg",

// "assets/images/tech/doi11.jpg",
// "assets/images/tech/doi12.jpg",

// "assets/images/tech/dml1.jpg",
// "assets/images/tech/dml2.jpg",

// "assets/images/tech/dml3.jpg",
// "assets/images/tech/dml4.jpg",

// "assets/images/tech/dml5.jpg",
// "assets/images/tech/dml6.jpg",

// "assets/images/tech/dml8.jpg",
// "assets/images/tech/dml9.jpg",

// "assets/images/tech/dml10.jpg",
// "assets/images/tech/dml11.jpg",

// "assets/images/tech/dml12.jpg",
// "assets/images/tech/dml13.jpg",

// "assets/images/tech/cvb1.png",
// "assets/images/tech/cvb2.jpg",

// "assets/images/tech/cvb3.jpg",
// "assets/images/tech/cvb4.jpg",

// "assets/images/tech/cvb5.jpg",
// "assets/images/tech/cvb6.png",

// "assets/images/tech/cvb7.jpg",
// "assets/images/tech/cvb8.jpg"
  
    ]
  }

  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    // let imageUrls: string[] = [];

    // // Select all images within the clientList1 element
    // const clientImages = this.clientList1.nativeElement.querySelectorAll('.carousel-item img');

    // // Loop through each image and push its source URL into the imageUrls array
    // clientImages.forEach((img: HTMLImageElement) => {
    //   imageUrls.push(img.src);
    // });

    // // Create a JSON object with the image URLs array
    // const jsonData = {
    //   imageUrls: imageUrls
    // };
    // console.log(imageUrls);

    // // Convert the JSON object to a JSON string
    // const jsonString = JSON.stringify(jsonData);

    // // Log the JSON string
    // console.log(jsonString);
  }
}
