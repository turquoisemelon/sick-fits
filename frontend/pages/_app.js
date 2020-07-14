import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
  // Configuration for server side rendering
  // Next.js specific lifecycle method. The goal is to expose page numbers. 
  // When going to different pages on the app we need to surface the page number.
  // Previous versions of Next.js would automatically do that but in the new version
  // we need to set it up explicitly
  static async getInitialProps({ Component, ctx}) {
    let pageProps = {};
    if(Component.getInitialProps) {
      // surface component props if there is any
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render () {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
      {/* Theming, layouts are set using Page component. You can have multiple layouts as well  */}
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

// this.props.apollo is accesible to this level through withData method
export default withData(MyApp);