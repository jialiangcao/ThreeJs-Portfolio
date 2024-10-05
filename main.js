import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Renderer and Camera
const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '-1';  

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 50;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 40, 20);
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 0, 20);
scene.add(pointLight);

//Models
const loader = new GLTFLoader();

let moon;
loader.load('./models/Moon.glb', function (gltf) {
  moon = gltf.scene
  scene.add(moon);
  moon.scale.set(0.65, 0.65, 0.65)
  moon.position.set(23, -25, 0)
  gsap.to(moon.position, {
    scrollTrigger: {
      trigger: ".scroll2",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: 70,
    x: 50
  });
  gsap.to(moon.scale, {
    scrollTrigger: {
      trigger: ".scroll2",
      start: "top bottom",
      end: "top bottom",
      scrub: 1
    },
    x: 0.1,  
    y: 0.1,  
    z: 0.1, 
    ease: "power.out"  
  });
}, undefined, function (error) {
  console.error(error);
});

let earth;
loader.load('./models/Earth.glb', function (gltf) {
  earth = gltf.scene
  scene.add(earth);
  earth.scale.set(2.8, 2.8, 2.8)
  earth.position.set(23, -100, 0)
  gsap.to(earth.position, {
    scrollTrigger: {
      trigger: ".scroll2",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    y: 80
  });
}, undefined, function (error) {
  console.error(error);
});

let cloud
loader.load('./models/Clouds.glb', function (gltf) {
  cloud = gltf.scene
  scene.add(cloud);
  cloud.scale.set(200, 200, 200)
  cloud.position.set(0, -200, 0)
  gsap.to(cloud.position, {
    scrollTrigger: {
      trigger: ".scroll3",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: 20
  });
  gsap.fromTo(cloud.position, {y:20}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll4",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:-200
  });
}, undefined, function (error) {
  console.error(error);
});
let cloud2
loader.load('./models/Clouds.glb', function (gltf) {
  cloud2 = gltf.scene
  scene.add(cloud2);
  cloud2.scale.set(100, 100, 100)
  cloud2.position.set(200, -200, 0)
  gsap.to(cloud2.position, {
    scrollTrigger: {
      trigger: ".scroll3",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: 20
  });
  gsap.fromTo(cloud2.position, {y:20}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll4",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:-200
  });
}, undefined, function (error) {
  console.error(error);
});
let cloud3
loader.load('./models/Clouds.glb', function (gltf) {
  cloud3 = gltf.scene
  scene.add(cloud3);
  cloud3.scale.set(200, 200, 200)
  cloud3.position.set(400, -200, 0)
  gsap.to(cloud3.position, {
    scrollTrigger: {
      trigger: ".scroll3",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: 20
  });
  gsap.fromTo(cloud3.position, {y:20}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll4",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:-200
  });
}, undefined, function (error) {
  console.error(error);
});
let cloud4
loader.load('./models/Clouds.glb', function (gltf) {
  cloud4 = gltf.scene
  scene.add(cloud4);
  cloud4.scale.set(200, 200, 200)
  cloud4.position.set(400, -200, 0)
  gsap.to(cloud4.position, {
    scrollTrigger: {
      trigger: ".scroll3",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: 20
  });
  gsap.fromTo(cloud4.position, {y:20}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll4",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:0
  });
  gsap.fromTo(cloud4.position, {x:0}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll6",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:-200
  });
}, undefined, function (error) {
  console.error(error);
});
let cloud5
loader.load('./models/Clouds.glb', function (gltf) {
  cloud5 = gltf.scene
  scene.add(cloud5);
  cloud5.scale.set(100, 100, 100)
  cloud5.position.set(400, -200, 0)
  gsap.to(cloud5.position, {
    scrollTrigger: {
      trigger: ".scroll3",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: 20
  });
  gsap.fromTo(cloud5.position, {y:20}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll4",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:100
  });
  gsap.fromTo(cloud5.position, {x:100}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll6",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:-200
  });
}, undefined, function (error) {
  console.error(error);
});
let cloud6
loader.load('./models/Clouds.glb', function (gltf) {
  cloud6 = gltf.scene
  scene.add(cloud6);
  cloud6.scale.set(200, 200, 200)
  cloud6.position.set(400, -200, 0)
  gsap.to(cloud6.position, {
    scrollTrigger: {
      trigger: ".scroll3",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: 20
  });
  gsap.fromTo(cloud6.position, {y:20}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll4",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:-200
  });
}, undefined, function (error) {
  console.error(error);
});

let airplane
loader.load('./models/Airplane.glb', function (gltf) {
  airplane = gltf.scene
  scene.add(airplane);
  airplane.scale.set(10, 6, 10)
  airplane.position.set(0, -200, -5)
  gsap.to(airplane.position, {
    scrollTrigger: {
      trigger: ".scroll3",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    y: -15
  });
  gsap.fromTo(airplane.position, {y:-70}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll4",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x:50
  });
  gsap.fromTo(airplane.position, {x:50}, {
    immediateRender: false,
    scrollTrigger: {
      trigger: ".scroll6",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    y: 70,
    x: 90
  });
  gsap.to(airplane.rotation,{
    scrollTrigger: {
      trigger: ".scroll6",
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    x: -1.2
  })
}, undefined, function (error) {
  console.error(error);
});

let workshop
loader.load('./models/Workshop.glb', function (gltf) {
  workshop = gltf.scene
  scene.add(workshop)
  workshop.scale.set(20, 20, 20)
  workshop.position.set(185, 0, 0)
  workshop.rotation.x = Math.PI/14
  gsap.to(workshop.position, {
    scrollTrigger: {
      trigger: ".scroll6",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    x: 40
  });
  gsap.to(workshop.rotation, {
    scrollTrigger: {
      trigger: ".scroll6",
      start: "top bottom",
      end: "top top",
      scrub: 1
    },
    y: Math.PI / 0.8 
  });
});

// Stars
for (let i = 0; i < 50; i++) {
  const geometry = new THREE.SphereGeometry(0.12, 32, 16)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const sphere = new THREE.Mesh(geometry, material); scene.add(sphere);
  sphere.position.set(
    (Math.floor(Math.random() * 70)) * (Math.round(Math.random()) * 2 - 1),
    (Math.floor(Math.random() * 30)) * (Math.round(Math.random()) * 2 - 1),
    (Math.floor(Math.random() * 20)) * (Math.round(Math.random()) * 2 - 1)
  )
  gsap.to(sphere.position, {
    x: "+=0.2",
    y: "+=0.2",
    z: "+=0.2",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    duration: Math.floor(Math.random() * 5)
  })
}

// Scene color changes
gsap.to(scene.background, {
  scrollTrigger: {
    trigger: ".scroll3",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      // Hides stars
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
          child.visible = false;
        }
      });
    },
    onLeaveBack: () => {
      // Shows stars
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
          child.visible = true;
        }
      });
    },
  },
  r: 0.4,
  g: 0.7,
  b: 0.9,
});
gsap.fromTo(scene.background, {r: 0.3, g: 0.6, b: 0.85}, {
  immediateRender: false,
  scrollTrigger: {
    trigger: ".scroll6",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  r: .7,
  g: .9,
  b: .8,
});

// Sidebar
let sidebarOpen = false;
const sidebar = document.querySelector('.sidebar');
gsap.to(sidebar, { xPercent: 100 })
   const toggleButton = document.querySelector('.menu');
   toggleButton.addEventListener('click', () => {
     if (!sidebarOpen) {
          gsap.to(sidebar, { xPercent: 0, duration: 0.5, ease: 'power2.out', opacity: 1 });
          sidebarOpen = true;
     } else {
       gsap.to(sidebar, {xPercent: 100,  duration:0.5, ease: 'power2.out' });
       sidebarOpen = false;
     }

  });

// Text Animations
gsap.to(".instruction", {
  y: 14,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  duration: 1.5
})
gsap.to(".intro", {
  scrollTrigger: {
    trigger: ".scroll",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".intro", {
        opacity: 0,
        duration: .5
      });
    },
    onLeaveBack: () => {
      gsap.to(".intro", {
        opacity: 1,
        duration: .5
      });
    }
  }
});

gsap.to(".work", {
  scrollTrigger: {
    trigger: ".scroll2",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".work", {
        opacity: 1,
        duration: .5
      });
    },
    onLeaveBack: () => {
      gsap.to(".work", {
        opacity: 0,
        duration: .5
      });
    }
  }
})
gsap.to(".work", {
  scrollTrigger: {
    trigger: ".scroll3",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".work", {
        opacity: 0,
        duration: .5
      })
    },
    onLeaveBack: () => {
      gsap.to(".work ", {
        opacity: 1,
        duration: .5
      });
    }
  }
})

gsap.to(".project", {
  scrollTrigger: {
    trigger: ".scroll3",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".project", {
        opacity: 1,
        duration: .5,
        y: -40,
        zIndex: 30
      });
    },
    onLeaveBack: () => {
      gsap.to(".project", {
        duration: .5,
        y: 400,
        opacity: 0,
        zIndex: 0
      });
    }
  }
})
gsap.to(".project", {
  scrollTrigger: {
    trigger: ".scroll4",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".project", {
        opacity: 0,
        duration: .5,
        zIndex: 0
      })
    },
    onLeaveBack: () => {
      gsap.to(".project ", {
        opacity: 1,
        duration: .5,
        zIndex: 30
      });
    }
  }
})

gsap.to(".skills", {
  scrollTrigger: {
    trigger: ".scroll5",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".skills", {
        opacity: 1,
        duration: .5
      })
    },
    onLeaveBack: () => {
      gsap.to(".skills ", {
        opacity: 0,
        duration: .5
      });
    }
  }
})
gsap.to(".skills", {
  scrollTrigger: {
    trigger: ".scroll6",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".skills", {
        opacity: 0,
        duration: .5
      })
    },
    onLeaveBack: () => {
      gsap.to(".skills ", {
        opacity: 1,
        duration: .5
      });
    }
  }
})

gsap.to(".contact", {
  scrollTrigger: {
    trigger: ".scroll8",
    start: "top bottom",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".contact", {
        opacity: 1,
        duration: .5,
        x: 0,
      });
    },
    onLeaveBack: () => {
      gsap.to(".contact", {
        opacity: 0,
        duration: .5,
        x: -500
      });
    }
  }
})

// Get the cursor ring element
const cursorRing = document.querySelector('.cursor-ring');

// Function to update cursor position
const updateCursor = (event) => {
  gsap.to(cursorRing, {
    duration: 0.1,
    x: event.clientX,
    y: event.clientY,
    ease: 'power2.out'
  });
};

// Add event listener for mouse move

document.addEventListener('mousemove', updateCursor);

const ringExpand = () => {
  gsap.to(cursorRing, {
    duration: 0.1,
    scale: 1.75, // Increase size on hover
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Change background color on hover
    borderColor: '#1d4ed8' // Change border color on hover
  });
};

const ringLeave = () => {
  gsap.to(cursorRing, {
    duration: 0.1,
    scale: 1, // Revert size
    backgroundColor: 'transparent', // Revert background color
    borderColor: '#ffffff' // Revert border color
  });
};

toggleButton.addEventListener('mouseenter', ringExpand)

toggleButton.addEventListener('mouseleave', ringLeave)

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener('mouseenter', ringExpand); // Pass function reference

submitButton.addEventListener('mouseleave', ringLeave); // Pass function reference

const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener('mouseenter', ringExpand); // Pass function reference

  link.addEventListener('mouseleave', ringLeave); // Pass function reference
});

const sideWork = document.querySelector('.sideWork')
sideWork.addEventListener('click', () => {
     gsap.to(window, { duration: 1, scrollTo: "#scroll2" })
     gsap.to(sidebar, {xPercent: 100,  duration:0.5, ease: 'power2.out' })
   }
)
const sideProjects = document.querySelector(".sideProjects")
sideProjects.addEventListener('click', () => {
     gsap.to(window, { duration: 1, scrollTo: "#scroll3" })
     gsap.to(sidebar, {xPercent: 100,  duration:0.5, ease: 'power2.out' })
  }
)
const sideSkills = document.querySelector(".sideSkills")
sideSkills.addEventListener('click', () => {
     gsap.to(window, { duration: 1, scrollTo: "#scroll5" })
     gsap.to(sidebar, {xPercent: 100,  duration:0.5, ease: 'power2.out' })
  }
)
const sideContact = document.querySelector(".sideContacts")
sideContact.addEventListener('click', () => {
     gsap.to(window, { duration: 1, scrollTo: "#scroll8" })
     gsap.to(sidebar, {xPercent: 100,  duration:0.5, ease: 'power2.out' })
  }
)
//Panning effect
const onMouseMove = (event) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  gsap.to(camera.rotation, {
    duration: 0.5,
    x: mouseY * 0.05,
    y: -(mouseX * 0.05),
    ease: 'power2.out'
  });
};

document.addEventListener('mousemove', onMouseMove);

// Render loop
const animate = () => {
  requestAnimationFrame(animate);
  if (moon) {
    moon.rotation.y += 0.001;
    earth.rotation.y += 0.001;
  }
  renderer.render(scene, camera);
};

animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
