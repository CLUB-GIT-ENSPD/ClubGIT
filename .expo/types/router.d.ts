/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/Styles`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/ClubGit`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/Commission`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/Profil`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/Quette`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/Styles`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/MemberApp/ClubGit`; params?: Router.UnknownOutputParams; } | { pathname: `/MemberApp/Commission`; params?: Router.UnknownOutputParams; } | { pathname: `/MemberApp/Profil`; params?: Router.UnknownOutputParams; } | { pathname: `/MemberApp/Quette`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/Styles${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/MemberApp/ClubGit${`?${string}` | `#${string}` | ''}` | `/MemberApp/Commission${`?${string}` | `#${string}` | ''}` | `/MemberApp/Profil${`?${string}` | `#${string}` | ''}` | `/MemberApp/Quette${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/Styles`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/ClubGit`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/Commission`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/Profil`; params?: Router.UnknownInputParams; } | { pathname: `/MemberApp/Quette`; params?: Router.UnknownInputParams; };
    }
  }
}
