import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  event = input.required<EventModel>();

  private activeIndex = signal(0);

  readonly activeImage = computed(() => {
    const ev = this.event();
    const idx = this.activeIndex();
    return ev.images[idx] ?? ev.image;
  });

  readonly fullStars = computed(() => {
    const r = Math.max(0, Math.min(5, this.event().rating));
    return Math.floor(r);
  });

  readonly fullStarsArr = computed(() => Array.from({ length: this.fullStars() }));

  readonly hasHalfStar = computed(() => {
    const r = Math.max(0, Math.min(5, this.event().rating));
    return r - Math.floor(r) >= 0.5;
  });

  readonly emptyStars = computed(() => {
    const used = this.fullStars() + (this.hasHalfStar() ? 1 : 0);
    return Math.max(0, 5 - used);
  });

  readonly emptyStarsArr = computed(() => Array.from({ length: this.emptyStars() }));

  setActive(i: number) {
    const ev = this.event();
    if (i < 0 || i >= ev.images.length) return;
    this.activeIndex.set(i);
  }

  prev() {
    const ev = this.event();
    const len = ev.images.length;
    if (len === 0) return;
    this.activeIndex.set((this.activeIndex() - 1 + len) % len);
  }

  next() {
    const ev = this.event();
    const len = ev.images.length;
    if (len === 0) return;
    this.activeIndex.set((this.activeIndex() + 1) % len);
  }

  shareWhatsApp() {
    const ev = this.event();
    const text = `Check out this event: ${ev.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener');
  }

  shareTelegram() {
    const ev = this.event();
    const url = `https://t.me/share/url?url=${encodeURIComponent(ev.link)}&text=${encodeURIComponent(
      ev.name,
    )}`;
    if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener');
  }
}
