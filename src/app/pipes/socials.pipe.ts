import { Pipe, PipeTransform } from '@angular/core';

interface SocialLink {
  platform: string;
  link: string | null;
  icon: string;
}

@Pipe({
  name: 'socialMedia',
  standalone: true,
})
export class SocialMediaPipe implements PipeTransform {
  transform(
    socials: { [key: string]: string | null },
    iconMap: { [key: string]: string }
  ): SocialLink[] {
    return Object.entries(socials)
      .filter(([_, link]) => link)
      .map(([platform, link]) => ({
        platform,
        link: link as string,
        icon: iconMap[platform],
      }));
  }
}
