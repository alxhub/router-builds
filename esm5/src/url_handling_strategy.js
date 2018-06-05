/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @experimental
 */
var /**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @experimental
 */
UrlHandlingStrategy = /** @class */ (function () {
    function UrlHandlingStrategy() {
    }
    return UrlHandlingStrategy;
}());
/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @experimental
 */
export { UrlHandlingStrategy };
/**
 * @experimental
 */
var /**
 * @experimental
 */
DefaultUrlHandlingStrategy = /** @class */ (function () {
    function DefaultUrlHandlingStrategy() {
    }
    DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return true; };
    DefaultUrlHandlingStrategy.prototype.extract = function (url) { return url; };
    DefaultUrlHandlingStrategy.prototype.merge = function (newUrlPart, wholeUrl) { return newUrlPart; };
    return DefaultUrlHandlingStrategy;
}());
/**
 * @experimental
 */
export { DefaultUrlHandlingStrategy };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX2hhbmRsaW5nX3N0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy91cmxfaGFuZGxpbmdfc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7QUFBQTs7OzhCQWpCQTtJQXNDQyxDQUFBOzs7Ozs7OztBQXJCRCwrQkFxQkM7Ozs7QUFLRDs7O0FBQUE7OztJQUNFLHFEQUFnQixHQUFoQixVQUFpQixHQUFZLElBQWEsT0FBTyxJQUFJLENBQUMsRUFBRTtJQUN4RCw0Q0FBTyxHQUFQLFVBQVEsR0FBWSxJQUFhLE9BQU8sR0FBRyxDQUFDLEVBQUU7SUFDOUMsMENBQUssR0FBTCxVQUFNLFVBQW1CLEVBQUUsUUFBaUIsSUFBYSxPQUFPLFVBQVUsQ0FBQyxFQUFFO3FDQTlDL0U7SUErQ0MsQ0FBQTs7OztBQUpELHNDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1VybFRyZWV9IGZyb20gJy4vdXJsX3RyZWUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFByb3ZpZGVzIGEgd2F5IHRvIG1pZ3JhdGUgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyB0byBBbmd1bGFyLlxuICpcbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVybEhhbmRsaW5nU3RyYXRlZ3kge1xuICAvKipcbiAgICogVGVsbHMgdGhlIHJvdXRlciBpZiB0aGlzIFVSTCBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuICAgKlxuICAgKiBXaGVuIGl0IHJldHVybnMgdHJ1ZSwgdGhlIHJvdXRlciB3aWxsIGV4ZWN1dGUgdGhlIHJlZ3VsYXIgbmF2aWdhdGlvbi5cbiAgICogV2hlbiBpdCByZXR1cm5zIGZhbHNlLCB0aGUgcm91dGVyIHdpbGwgc2V0IHRoZSByb3V0ZXIgc3RhdGUgdG8gYW4gZW1wdHkgc3RhdGUuXG4gICAqIEFzIGEgcmVzdWx0LCBhbGwgdGhlIGFjdGl2ZSBjb21wb25lbnRzIHdpbGwgYmUgZGVzdHJveWVkLlxuICAgKlxuICAgKi9cbiAgYWJzdHJhY3Qgc2hvdWxkUHJvY2Vzc1VybCh1cmw6IFVybFRyZWUpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgcGFydCBvZiB0aGUgVVJMIHRoYXQgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhlIHJvdXRlci5cbiAgICogVGhlIHJlc3Qgb2YgdGhlIFVSTCB3aWxsIHJlbWFpbiB1bnRvdWNoZWQuXG4gICAqL1xuICBhYnN0cmFjdCBleHRyYWN0KHVybDogVXJsVHJlZSk6IFVybFRyZWU7XG5cbiAgLyoqXG4gICAqIE1lcmdlcyB0aGUgVVJMIGZyYWdtZW50IHdpdGggdGhlIHJlc3Qgb2YgdGhlIFVSTC5cbiAgICovXG4gIGFic3RyYWN0IG1lcmdlKG5ld1VybFBhcnQ6IFVybFRyZWUsIHJhd1VybDogVXJsVHJlZSk6IFVybFRyZWU7XG59XG5cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFVybEhhbmRsaW5nU3RyYXRlZ3kgaW1wbGVtZW50cyBVcmxIYW5kbGluZ1N0cmF0ZWd5IHtcbiAgc2hvdWxkUHJvY2Vzc1VybCh1cmw6IFVybFRyZWUpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgZXh0cmFjdCh1cmw6IFVybFRyZWUpOiBVcmxUcmVlIHsgcmV0dXJuIHVybDsgfVxuICBtZXJnZShuZXdVcmxQYXJ0OiBVcmxUcmVlLCB3aG9sZVVybDogVXJsVHJlZSk6IFVybFRyZWUgeyByZXR1cm4gbmV3VXJsUGFydDsgfVxufSJdfQ==