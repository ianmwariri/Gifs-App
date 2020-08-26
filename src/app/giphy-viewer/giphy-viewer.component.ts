import { Component, OnInit, Input} from '@angular/core'; 

@Component({ 
  selector: 'app-giphy-viewer', 
  templateUrl: './giphy-viewer.component.html', 
  styleUrls: ['./giphy-viewer.component.css'] 
}) 
export class GiphyViewerComponent implements OnInit { 
  @Input() imgUrl: string; 

  constructor() { } 

  ngOnInit() { 
  } 
}