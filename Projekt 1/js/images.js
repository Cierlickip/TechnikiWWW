// gallery.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch images from the "images" folder and create gallery items
    function createGalleryItems() {
        const galleryRow = document.getElementById("galleryRow");

        // List of image filenames in the "images" folder
        const imageFilenames = ['Airedale-Terrier.jpg', 'Akita.jpg', 'Alaskan-Malamute.jpg', 'Alaskan-Husky.jpg', 'American-Bulldog.jpg', 'American-Staffordshire-Terrier.jpg', 'American-Eskimo-Dog.jpg', 'American-Foxhound.jpg', 'Aussie-Bulldog.jpg', 'Australian-Cattle-dog.jpg', 'Australian-Cobberdog.jpg', 'Australian-Kelpie.jpg', 'Australian-Shepherd.jpg', 'Australian-Terrier.jpg', 'Basenji.jpg', 'Basset-Hound.jpg', 'Beagle.jpg', 'Beaglier.jpg', 'Bernese-Mountain-Dog.jpg', 'Bichon-Frise.jpg', 'Boerboel.jpg', 'Border-Collie.jpg', 'Border-Terrier.jpg', 'Boston-Terrier.jpg', 'Boxer.jpg', 'British-English-Bulldog.jpg', 'Brussels-Griffon.jpg', 'Bull-Arab.jpg', 'Bull-Terrier.jpg', 'Bullmastiff.jpg', 'Cairn-Terrier.jpg', 'Cane-Corso.jpg', 'Cardigan-Corgi.jpg', 'Cavalier-King-Charles-Spaniel.jpg', 'Cavoodle.jpg', 'Chihuahua.jpg', 'Chow-Chow.jpg', 'Clumber-Spaniel.jpg', 'Cocker-Spaniel.jpg', 'Collie.jpg', 'Dachshund.jpg', 'Dalmatian.jpg', 'Doberman.jpg', 'Dogue-De-Bordeaux.jpg', 'Elkhound.jpg', 'English-Pointer.jpg', 'English-Toy_Terrier.jpg', 'Field-Spaniel.jpg', 'Fox-Terrier-Rough.jpg', 'French-Bulldog.jpg', 'German-Shepherdjpg.jpg', 'German-Shorthaired-Pointer.jpg', 'Golden-Retriever.jpg', 'Great-Dane.jpg', 'Greyhound-Black-White.jpg', 'Groodle.jpg', 'Harrier.jpg', 'Havanese.jpg', 'Hungarian-Vizsla.jpg', 'Irish-Setter.jpg', 'Irish-Terrier.jpg', 'Italian-Greyhound.jpg', 'Italian-Spinone.jpg', 'Jack-Russell-Terrier.jpg', 'Japanese-Spitz.jpg', 'Kangal.jpg', 'Keeshond.jpg', 'Labradoodle.jpg', 'Labrador.jpg', 'Lhasa-Apso.jpg', 'Louisiana-Catahoula-Leopard.jpg', 'Maltese-Shih-Tzu.jpg', 'Maltese.jpg', 'Miniature-Bull-Terrier.jpg', 'Miniature-Dhshundjpg.jpg', 'Miniature-Fox-Terrier.jpg', 'Miniature-Pinscher.jpg', 'Miniature-Poodle.jpg', 'Miniature-Schnauzer.jpg', 'Moodle.jpg', 'Newfoundland.jpg', 'Old-English-Sheepdog.jpg', 'Papillon.jpg', 'Pekingese.jpg', 'Pitbulljpg.jpg', 'Pomeranian.jpg', 'Portugese-Waterdog.jpg', 'Pug.jpg', 'Puli.jpg', 'Rhodesian-Ridgeback.jpg', 'Rottweiler.jpg', 'Samoyed.jpg', 'Schnauzer.jpg', 'Schnoodle.jpg', 'Scotch-Collie.jpg', 'Scottish-Terrier.jpg', 'Shar-Pei.jpg', 'Shetland-Sheepdog.jpg', 'Shih-Tzu.jpg', 'Siberian-Husky.jpg', 'Soft-Coated-Wheaten-Terrier.jpg', 'Spoodle.jpg', 'Springer-Spaniel.jpg', 'Staffordshire-Bull-Terrier.jpg', 'Standard-Poodle.jpg', 'Toy-Poodle.jpg', 'Weimaraner.jpg', 'Welsh-Corgy.jpg', 'Welsh-Terrier.jpg', 'West-Highland-White-Terrier.jpg', 'Whippet.jpg', 'Yorkshire-Terrier.jpg']; // Add more filenames as needed

        // Loop through the image filenames and create gallery items
        imageFilenames.forEach((filename, index) => {
            // Create column div
            const colDiv = document.createElement("div");
            colDiv.classList.add("col-12", "col-md-6", "col-lg-3");

            // Create portfolio content div
            const portfolioContentDiv = document.createElement("div");
            portfolioContentDiv.classList.add("portfolio-content");

            // Create figure element
            const figure = document.createElement("figure");

            // Create image element
            const img = document.createElement("img");
            img.src = `images/${filename}`;
            img.id = `myImg${index + 1}`;
            img.alt = "";

            // Append image to figure
            figure.appendChild(img);

            // Create entry content div
            const entryContentDiv = document.createElement("div");
            entryContentDiv.classList.add("entry-content", "flex", "flex-column", "align-items-center", "justify-content-center");

            // Create heading element
            const h3 = document.createElement("h3");
            h3.textContent = filename.replace(/\.[^/.]+$/, ''); // Remove file extension

            // Append heading to entry content div
            entryContentDiv.appendChild(h3);

            // Create modal div
            const modalDiv = document.createElement("div");
            modalDiv.id = `myModal${index + 1}`;
            modalDiv.classList.add("modal");

            // Create close span
            const closeSpan = document.createElement("span");
            closeSpan.classList.add("close");
            closeSpan.id = `close${index + 1}`;
            closeSpan.innerHTML = "&times;";

            // Create modal image
            const modalImg = document.createElement("img");
            modalImg.classList.add("modal-content");
            modalImg.id = `img0${index + 1}`;

            // Append close span and modal image to modal div
            modalDiv.appendChild(closeSpan);
            modalDiv.appendChild(modalImg);

            portfolioContentDiv.appendChild(figure);
            portfolioContentDiv.appendChild(entryContentDiv);
            portfolioContentDiv.appendChild(modalDiv);

            // Append portfolio content and modal div to column div
            colDiv.appendChild(portfolioContentDiv);

            // Append the created column to the gallery row
            galleryRow.appendChild(colDiv);
        });
    }

    // Call the function to create gallery items on page load
    createGalleryItems();

    // createModal function
    function createModal(myModal, myImg, img0X, close) {
        var modal = document.getElementById(myModal);

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById(myImg);
        var modalImg = document.getElementById(img0X);
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;

            document.querySelector('.project-branding').style.display = 'none';
        }

        // Get the <span> element that closes the modal
        var span = document.getElementById(close);

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";

            // Show the element again after closing the modal
            document.querySelector('.project-branding').style.display = 'block';
        }
    }

    // Filter function
    function filterGalleryItems(letter) {
        const galleryItems = document.querySelectorAll('.col-12');
        galleryItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            if (letter === 'all' || itemName.startsWith(letter.toLowerCase())) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Event listener for the filter dropdown
    const filterDropdown = document.getElementById('filterLetter');
    filterDropdown.addEventListener('change', function () {
        const selectedLetter = this.value;
        filterGalleryItems(selectedLetter);
    });

    // Invocations of createModal
    for (let i = 1; i <= 112; i++) {
        createModal(`myModal${i}`, `myImg${i}`, `img0${i}`, `close${i}`);
    }
})

