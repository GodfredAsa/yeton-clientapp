import { Component, OnDestroy, OnInit } from '@angular/core';
import { FAQModel } from '../../model/faq.model';
import { Subscription } from 'rxjs';
import { FaqService } from '../../services/faq.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit, OnDestroy{

  isModalOpen: boolean = false;
  isCreateFaqModalOpened: boolean = false;
  showCreateFaqBtn: boolean = false;

      faqForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        message: new FormControl("", [Validators.required, Validators.minLength(5)]),
      })

constructor(
  private _faqService: FaqService
){}

  ngOnInit(): void {
   this.getFAQs()
  }

  faqs: FAQModel[] = []
  subscriptions: Subscription[] = []


selectedQuestion: FAQModel;

toggleQuestion(question: any) {
  if (this.selectedQuestion === question) {
    this.selectedQuestion = null;
  } else {
    this.selectedQuestion = question;
    this.assignFormValues(this.selectedQuestion)
  }
}

getFAQs(){
  this.subscriptions.push(
    this._faqService.getFaqs().subscribe({
      next: (res) => {this.faqs = res},
      error: (err) => {console.log(err.error.message)}
    })
  )
}


updateFaq(){
  this.subscriptions.push(
    this._faqService
    .updateFaq(
      this.selectedQuestion.faqId,
      {title: this.faqForm.value.title, message: this.faqForm.value.message})
      .subscribe({
      next: (res) => {
        window.location.reload()
      },
      error: (err) => {
        console.log(err.error.message);
        window.location.reload()

      }
    }
    )
  )

}

assignFormValues(faqModel: FAQModel){
  this.faqForm.patchValue({
    title: faqModel.title,
    message: faqModel.message
  })
}

ngOnDestroy(): void {
  this.subscriptions.forEach(sub => sub.unsubscribe())
}


deleteFaqById(){
  this.subscriptions.push(
    this._faqService.deleteFaqById(this.selectedQuestion.faqId).subscribe({
      next: (res) => {
        console.log("Delete FAQ Successful");
        window.location.reload()
      },
      error: () => {console.log("Error deleting FAQ");
      }
    })
  )
}


addFAQ(){
  this.subscriptions.push(
    this._faqService
    .addFaq(
      {title: this.faqForm.value.title, message: this.faqForm.value.message})
      .subscribe({
      next: (res) => {
        // window.location.reload()
        console.log(res.message);

      },
      error: (err) => {
        console.log(err.error.message);
        // window.location.reload()

      }
    }
    )
  )
}








}
