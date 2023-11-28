import { Component } from '@angular/core';

@Component({
  selector: 'app-democarousel',
  templateUrl: './democarousel.component.html',
  styleUrls: ['./democarousel.component.css']
})
export class DemocarouselComponent {
  ngOnInit() {
    let items = document.querySelectorAll('.carousel .carousel-item');
 
    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
 
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
 
        // Explicitly cast Node to Element
        let cloneChild = next.cloneNode(true) as Element;
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }

}

// function test(){

//   let items = document.querySelectorAll('.carousel .carousel-item')

// 		items.forEach((el) => {
// 			const minPerSlide = 4
// 			let next = el.nextElementSibling
// 			for (var i=1; i<minPerSlide; i++) {
// 				if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })

// }


