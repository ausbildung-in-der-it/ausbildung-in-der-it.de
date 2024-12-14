import { LayoutProps, LayoutRegistry, LayoutType } from './types';
import ArticleLayout from './ArticleLayout';
import OverviewLayout from './OverviewLayout';

const layoutRegistry: LayoutRegistry = {
    article: ArticleLayout,
    overview: OverviewLayout,
};

interface LayoutRendererProps extends LayoutProps {
    layout?: LayoutType;
}

export default function LayoutRenderer({ layout = 'article', ...props }: LayoutRendererProps) {
    const Component = layoutRegistry[layout];
    return <Component {...props} />;
} 