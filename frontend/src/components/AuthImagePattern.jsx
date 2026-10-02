import { MessageCircle, User, Users, Zap } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md w-full text-center translate-y-6">
        <div className="relative h-72 mb-8">
          {/* Connection lines */}
          <div className="absolute left-1/2 top-1/2 w-48 h-px bg-primary/20 -translate-x-1/2 rotate-12" />
          <div className="absolute left-1/2 top-1/2 w-48 h-px bg-primary/20 -translate-x-1/2 -rotate-45" />
          <div className="absolute left-1/2 top-1/2 w-48 h-px bg-primary/20 -translate-x-1/2 rotate-90" />

          {/* Center */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                          size-20 rounded-full bg-primary/10
                          border border-primary/20
                          flex items-center justify-center
                          shadow-lg shadow-primary/10"
          >
            <MessageCircle className="size-9 text-primary" />
          </div>

          {/* Top */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2
                          size-14 rounded-2xl bg-base-100
                          border border-base-300
                          flex items-center justify-center
                          shadow-lg animate-pulse"
          >
            <User className="size-6 text-primary" />
          </div>

          {/* Left */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2
                          size-14 rounded-2xl bg-base-100
                          border border-base-300
                          flex items-center justify-center
                          shadow-lg"
          >
            <Users className="size-6 text-secondary" />
          </div>

          {/* Right */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2
                          size-14 rounded-2xl bg-base-100
                          border border-base-300
                          flex items-center justify-center
                          shadow-lg animate-pulse"
          >
            <MessageCircle className="size-6 text-accent" />
          </div>

          {/* Bottom */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2
                          size-14 rounded-2xl bg-base-100
                          border border-base-300
                          flex items-center justify-center
                          shadow-lg"
          >
            <Zap className="size-6 text-warning" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
