import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
  
type VoteType = 'Yes' | 'No';

@Component({
  selector: 'app-votings-new',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './votings-new.component.html',
  styleUrls: ['./votings-new.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class VotingsNewComponent implements OnInit {

  @Input() public logResult = () => console.log({ yesVotings: this.yesVotings, noVotings: this.noVotings });

  @Output() voteClicked: EventEmitter<VoteType> = new EventEmitter<VoteType>();
	yesVotings = 5;
	noVotings = 5;

	constructor(private el: ElementRef) {}

	ngOnInit(): void {}

	// make public methods
	
	onVoteClick(type: VoteType): void {
		console.log('onVoteClick type = ',type);
		if (type === 'Yes') {
			this.yesVotings += 1;
			this.noVotings -= 1;
		} else {
			this.noVotings += 1;
			this.yesVotings -= 1;
		}
		console.log('About to dispatch ', type);
		this.dispatchClickEvent(type);
	}

	private dispatchClickEvent(type: VoteType): void {
		// angular emit
        console.log('dispatchClickEvent Emits type');
		this.voteClicked.emit(type);
		// custom emi for 'addEventListener()'
		this.el.nativeElement.dispatchEvent(new CustomEvent('is-voted'));
	}	
}
