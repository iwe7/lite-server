import { Pipe, PipeTransform } from '@angular/core';
export enum CardTypeEnum {
    "CASH" = "代金券",
    "GROUPON" = "团购券",
    "DISCOUNT" = "折扣券",
    "GIFT" = "兑换券",
    "GENERAL_COUPON" = "优惠券",
    "GENERAL_CARD" = "礼品卡",
    "MEMBER_CARD" = "会员卡",
    "MEETING_TICKET" = "会议门票",
    "SCENIC_TICKET" = "景区门票",
    "MOVIE_TICKET" = "电影票",
    "BOARDING_PASS" = "飞机票"
}
@Pipe({
    name: 'cardType'
})
export class CardTypePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return CardTypeEnum[value]
    }
}
