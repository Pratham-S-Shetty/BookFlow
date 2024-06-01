import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  card1 = async (idd: string) => {
    console.log(idd);
    const data = await fetch(`http://localhost:3000/data/${idd}`).then((res) =>
      res.json()
    );
    const { desc, id, pdflink, publishdate, title } = data;

    const titleElement = document.getElementById('title');
    const descElement = document.getElementById('desc');
    const publishdateElement = document.getElementById('publishdate');
    const pdflinkElement = document.getElementById('pdflink');
    const frame = document.getElementById('frame-c');
    const pdfFrame = document.querySelector('.description-card iframe');
    if (titleElement) {
      titleElement.innerText = 'Title: ' + title;
    }
    if (descElement) {
      descElement.innerText = 'Description: ' + desc;
    }
    if (publishdateElement) {
      publishdateElement.innerText = 'Publish Date: ' + publishdate;
    }
    if (pdflinkElement) {
      pdflinkElement.innerText = 'PDF Link: ' + pdflink;
    }
    if (pdfFrame) {
      pdfFrame.setAttribute('src', pdflink);
    }
    if (frame) {
      frame.setAttribute('src', pdflink);
    }

    console.log(data);
    console.log(desc, id, pdflink, publishdate, title);
  };
}
