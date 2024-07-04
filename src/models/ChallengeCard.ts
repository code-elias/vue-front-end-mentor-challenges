export class ChallengeCard {
  Title: string
  Info: string
  Link: string
  BgImg: string
  BgPosition?: string

  // Overloaded Constructors
  constructor(title: string, info: string, link: string, bgImg: string)
  constructor(title: string, info: string, link: string, bgImg: string, bgPosition: string)

  constructor(title: string, info: string, link: string, bgImg: string, bgPosition?: string) {
    this.Title = title
    this.Info = info
    this.Link = link
    this.BgImg = bgImg
    this.BgPosition = bgPosition ?? 'Center'
  }
}
