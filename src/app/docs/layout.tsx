import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import DrBanner from '../components/ui/drBanner';
import Nav from '../components/ui/nav';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <main>
        <div className='container mx-auto px-4'>
            <Nav />
        </div>
        <DocsLayout tree={source.pageTree} {...baseOptions()}>
          {children}
        </DocsLayout>
    </main>
  );
}
