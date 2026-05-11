<div className="rounded-[2rem] border border-[#fff8df]/25 bg-[#fff8df]/95 p-4 shadow-2xl backdrop-blur">
  <div className="relative overflow-hidden rounded-[1.5rem]">
    <SmartImage
      paths={step.image}
      alt={step.title}
      className="h-[330px] w-full object-cover"
    />
    <div className="absolute left-4 top-4 rounded-full bg-[#243b22] p-3 text-white shadow-lg">
      <Icon size={26} />
    </div>
  </div>

  <div className="p-5">
    <div className="mb-2 text-sm font-bold uppercase tracking-[.2em] text-[#8b6f2d]">
      Step {stepIndex + 1} of {steps.length}
    </div>

    <h2 className="font-serif text-3xl font-black text-[#172617]">
      {step.title}
    </h2>

    <p className="mt-3 leading-7 text-[#3b4d32]">
      {step.details}
    </p>
  </div>
</div>
