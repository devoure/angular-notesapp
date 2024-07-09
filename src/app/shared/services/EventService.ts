import { Subject } from 'rxjs';

class EventBusService{
  private subject =  new Subject();

  emit(eventName: string, payload: any){
    this.subject.next({eventName, payload});
  }

  listen(eventName: string, callback: (event: any) => void){
    this.subject.subscribe((nextObj: any) => {
      if (eventName === nextObj.eventName){
        callback(nextObj.payload);
      }
    })
  }
}

export default new EventBusService();
