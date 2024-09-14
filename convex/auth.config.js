export default {
  providers: [
    {
      // Configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      domain: "https://native-bluejay-40.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};
